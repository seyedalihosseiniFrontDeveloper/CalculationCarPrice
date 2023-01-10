const listYears = function (trim){
  let years
  switch (trim){
    case 'فول آپشن':
      years ={
        title: 'سال تولید خودرو را انتخاب کنید',
        items: [
          {
            name: '2012',
            id:306,
            step: 3,
          },
          {
            name: '2015',
            id:37,
            step: 3,
          },
          {
            name: '2017',
            id:307,
            step: 3,
          },
        ]
      }
      break
    case 'SLX' :
      years={
        title: 'سال تولید خودرو را انتخاب کنید',
        items:[
          {
            name: '1382',
            id:39,
            step: 3,
          },
          {
            name: '1383',
            id:391,
            step: 3,
          },
          {
            name: '1384',
            id:319,
            step: 3,
          },
          {
            name: '1385',
            id:329,
            step: 3,
          },
          {
            name: '1386',
            id:339,
            step: 3,
          },
          {
            name: '1387',
            id:349,
            step: 3,
          },
          {
            name: '1388',
            id:359,
            step: 3,
          },
          {
            name: '1389',
            id:369,
            step: 3,
          },
        ]}
      break
    default:
      years={
        title: 'سال تولید خودرو را انتخاب کنید',
        items:[
          {
            name: '1382',
            id:39,
            step: 3,
          },
          {
            name: '1383',
            id:391,
            step: 3,
          },
          {
            name: '1384',
            id:319,
            step: 3,
          },
          {
            name: '1385',
            id:329,
            step: 3,
          },
          {
            name: '1386',
            id:339,
            step: 3,
          },
          {
            name: '1387',
            id:349,
            step: 3,
          },
          {
            name: '1388',
            id:359,
            step: 3,
          },
          {
            name: '1389',
            id:369,
            step: 3,
          },
          {
            name: '1390',
            id:379,
            step: 3,
          },
          {
            name: '1391',
            id:389,
            step: 3,
          },
          {
            name: '1392',
            id:399,
            step: 3,
          },
          {
            name: '1393',
            id:400,
            step: 3,
          },
          {
            name: '1395',
            id:401,
            step: 3,
          },
        ]}
      break
  }
  return years
}
export default listYears
