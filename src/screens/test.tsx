// useEffect(() => {
//     if (tokenValue) {
//       let eventSource;
//       const fetchSSE = async () => {
//         try {
//           eventSource = new EventSource(`${BACK_API}/alarm/subscribe`, {
//             headers: {
//               Authorization: tokenValue,
//             },
//             heartbeatTimeout: 60 * 1000 * 30, //30분
//             //withCredentials: true, //크로스 도메인에 요청을 보낼 때 요청에 credential 정보를 담아서 보낼 지를 결정하는 항목
//           });

//           /* EVENTSOURCE ONMESSAGE : 서버로부터 message를 수신했을 때 호출하는 이벤트 핸들러 */
//           eventSource.onmessage = async (event) => {
//             const res = await event.data;
//             console.log(res);
//             setAlarmCount(res);
//             //dispatch(__getAlarmCount());
//           };

//           /* EVENTSOURCE ONERROR : 에러가 발생하거나 EventSource 객체에서 error event가 감지되었을 때 호출하는 이벤트 핸들러 */
//           eventSource.onerror = async (event) => {
//             console.log("45000 에러 이벤트 발생");
//             console.log(event.error.message);
//             if (!event.error.message.includes("No activity")) {
//               console.log("에러 이벤트 발생");
//               eventSource.close();
//             }
//           };
//         } catch (error) {}
//       };
//       fetchSSE();
//       return () => eventSource.close();
//     }
//   }, [tokenValue, EventSource]);


//   useEffect(){
// 	if (!listening) {
//       eventSource = new EventSource(`${SERVER_URL_API}/sse/join/${surveyId}`); // 구독

//       eventSource.onmessage = async (event) => {
//         const data = JSON.parse(event.data);
//         data.msg === "data" &&
//           batch(() => {
//             console.log(data.total);
//             setData(data.total);
//           });
//       };
//       eventSource.onerror = async (error) => {
//         console.error(error);
//         eventSource.close();
//       };
      
//       setListening(true);
//     }
//     return () => {
//       eventSource.close();
//       console.log("event closed");
//     };
//  }, []);