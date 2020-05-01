// var numbers = {
//   0: "০",
//   1: "১",
//   2: "২",
//   3: "৩",
//   4: "৪",
//   5: "৫",
//   6: "৬",
//   7: "৭",
//   8: "৮",
//   9: "৯",
// };

const { google } = require("googleapis");
// const GoogleSpreadsheet = require("google-spreadsheet");
// const { promisify } = require("util");
const keys = require("./");

const client = new google.auth.JWT(keys.client_email, null, keys.private_key, [
  "https://www.googleapis.com/auth/spreadsheets.readonly",
]);

client.authorize(function (err, tokens) {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log("connected");
  }
});

async function gsrun(cl) {
  console.log("im in");
  const gsapi = google.sheets({ version: "v4", auth: cl });
  const opt = {
    spreadsheetId: "1YPRh0SZzl9pHKf4EX43nD1CyPCSrUtKd5mewTCJHJLA",
    range: "Data!A1:F59",
  };

  let data = await gsapi.spreadsheets.values.get(opt);
  console.log(data);
}

// async function accessSpreadsheet() {
//   const doc = new GoogleSpreadsheet(
//     "1YPRh0SZzl9pHKf4EX43nD1CyPCSrUtKd5mewTCJHJLA"
//   );
//   await promisify(doc.useServiceAccountAuth)(creds);
//   const info = await promisify(doc.getInfo)();
//   const sheet = info.worksheets[0];
//   console.log("Title: ${sheet.title}, Rows: ${sheet.rowCount}");
// }

// accessSpreadsheet();

// $("#subbtn").click(function (e) {
//   var number = $("#phone-num").val();
//   console.log(number);

//   var output = [];
//   for (var i = 0; i < number.length; ++i) {
//     for (var key in numbers) {
//       if (number[i] == key) {
//         output.push(numbers[key]);
//       }
//     }
//   }
//   num = output.join("");
//   console.log(num);
//   // for (var key in numbers) {
//   //   console.log(key);
//   // }
// });
