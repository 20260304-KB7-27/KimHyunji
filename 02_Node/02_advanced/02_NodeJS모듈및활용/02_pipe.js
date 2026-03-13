const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'readME.txt');
const savePath = path.join(__dirname, 'writeMe.txt');

const rs = fs.createReadStream(filePath, "utf-8");
const ws = fs.createWriteStream(savePath);

//파이프(pipe)
// - 스트림을 연결하는 스트림
// - data 이벤트가 발생했을때 데이터를 읽어오고 쓰는 것을 한번에 처리가능

rs.pipe(ws);

















rs.on('data', (chunk) =>{
    console.log(`새로운 청크 도착`);
    console.log('청크 길이', chunk.length);
    console.log('첨크 내용: ', chunk);
})
.on("end", () => {
    console.log(`data 읽기가 완료되었습니다.`);
})
.on('error', (err) => {
    console.error(`error가 발생했습니다 ${error}`);
});