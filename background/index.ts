// import { getPort } from "@plasmohq/messaging/port"

// const clickPort = getPort("click")
// chrome.action.onClicked.addListener(async () => {
//   clickPort.postMessage({
//     hello: "world"
//   })
// })

// chrome.action.onClicked.addListener(async () => {
//   //background.js
//   chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//     chrome.runtime.sendMessage(
//       { from: "background发出的消息1", to: "content_scripts发出的消息2" },
//       function (response) {
//         alert("收到content_scripts回复结果：" + response)
//       }
//     )
//   })
// })
export {}
