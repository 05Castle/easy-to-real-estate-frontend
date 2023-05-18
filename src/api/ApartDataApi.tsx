import axios from 'axios';
import { KakaoApi } from './kakaoApi';

const getPastDates = (years: number) => {
  const pastDates = [];
  const currentDate = new Date();
  const pastDate = new Date();
  pastDate.setFullYear(pastDate.getFullYear() - years);

  while (pastDate <= currentDate) {
    const year = pastDate.getFullYear();
    const month = pastDate.getMonth() + 1;
    pastDates.push(year.toString() + month.toString().padStart(2, '0'));
    pastDate.setMonth(pastDate.getMonth() + 1);
  }

  return pastDates;
};

// 페이지 최대갯수가 49인 관계로 1페이지를 초과하게되면 페이지를 넘어가서 조회를해야함
const fetchData = async (lawCityNumber: string, yyyymm: string, pageNo = 1): Promise<any[]> => {
  const serviceKey =
    'J7KH6Ppo1yX4MSbd9yNXaeWvjo%2FcWuqKWSdnLBFFU1cnHfwPa1Ym4Ecc4ZtjUA0R0%2FNK%2FxdcZBZEbrKcwUQq0g%3D%3D';
  let queryParams = `OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcAptTradeDev?serviceKey=${serviceKey}`;
  queryParams += `&pageNo=${pageNo}`;
  queryParams += `&numOfRows=49`;
  queryParams += `&LAWD_CD=${lawCityNumber}`;
  queryParams += `&DEAL_YMD=${yyyymm}`;

  const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';
  const url = `${PROXY}/${queryParams}`;
  console.log('Request URL:', url);
  const response = await axios.get(url);
  const responseData = response.data.response.body.items.item;
  const { totalCount } = response.data.response.body;
  if (totalCount > pageNo * 49) {
    const nextPageItems = await fetchData(lawCityNumber, yyyymm, pageNo + 1);
    return responseData.concat(nextPageItems);
  }
  return responseData;
};

const ApartData = (adress: string) => {
  return KakaoApi(adress).then((documents) => {
    if (documents !== null) {
      // 현재날자를 기준으로 몇년전 날자를 조회할것인지 월단위로 배열에 넣어줌
      const pastDates = getPastDates(1);

      console.log(
        `카카오 api 를 활용한 도로명 : `,
        documents.road_address.main_building_no,
        ' 법정동 : ',
        documents.address.b_code,
      );
      const Bcode = documents.address.b_code;
      const lawCityNumber = Bcode.slice(0, 5);
      const lawSectionNumber = parseInt(Bcode.slice(5, 10), 10);
      const roadNumber = documents.road_address.main_building_no.padStart(5, '0');

      const results: { [key: string]: any } = { filterDATA: {}, originalDATA: {} };

      return Promise.all(
        pastDates.map((yyyymm) => {
          return fetchData(lawCityNumber, yyyymm)
            .then((responseData) => {
              console.log(yyyymm, '의 ResponseData :', responseData);
              const filteredData = responseData.filter(
                (item: any) =>
                  item.도로명건물본번호코드 === roadNumber &&
                  item.법정동읍면동코드 === lawSectionNumber,
              );
              results.filterDATA[yyyymm] = filteredData;
              results.originalDATA[yyyymm] = responseData;
              return null; // 반환 값으로 null을 명시적으로 반환
            })
            .catch((error) => {
              console.error(`API response failed`, error);
              return null; // 반환 값으로 null을 명시적으로 반환
            });
        }),
      ).then(() => results);
    }
  });
};

export default ApartData;
