// var CREATSONG_API = "https://2-dot-backup-server-002.appspot.com/_api/v2/songs";
// var jsSong = {
//                 name: "Stylix Helix",
//                 description: 'mai',
//                 singer: 'myths',
//                 author: 'mai',
//                 thumnail: 'https://i.pinimg.com/originals/da/b2/d4/dab2d405730473923d33a32e814950cd.jpg',
//                 link: 'https://c1-ex-swe.nixcdn.com/NhacCuaTui921/StyxHelix-MythRoid-4454740.mp3',
//             }
//             var jsonData = JSON.stringify(jsSong);
// // var btnSubmit = document.forms['creat-song-form']['btn-submit'];
// // if (btnSubmit != null) {
// //     btnSubmit.onclick = function () {
// //         var txtName = document.forms['creat-song-form']['name'];
// //         var txtDescription = document.forms['creat-song-form']['description'];
// //         var txtSinger = document.forms['creat-song-form']['singer'];
// //         var txtAuthor = document.forms['creat-song-form']['author'];
// //         var txtThumnail = document.forms['creat-song-form']['thumnail'];
// //         var txtLink = document.forms['creat-song-form']['link'];
// //         if (txtName != null) {
// //             var name = txtName.value;
// //             var description = txtDescription.value;
// //             var singer = txtSinger.value;
// //             var author = txtAuthor.value;
// //             var thumnail = txtThumnail.value;
// //             var link = txtLink.value;
// //             var jsSong = {
// //                 name: name,
// //                 description: description,
// //                 singer: singer,
// //                 author: author,
// //                 thumnail: thumnail,
// //                 link: link,
// //             }
// //             var jsonData = JSON.stringify(jsSong);
// //             postSongData(jsonData);
// //         }
// //     }
// // }
// // function postSongData(jsonData) {
// //     var req = new  XMLHttpRequest();
// //     req.onreadystatechange = function () {
// //         if(this.readyState == 4 && this.status == 201){
// //             alert(this.responseText);
// //         }
// //     }
// //     req.open('POST', CREATSONG_API, true);
// //     req.setRequestHeader('Content-type','application/json;charset=UTF-8');
// //     req.setRequestHeader('Authorization',  'Basic lx0e7BQzpfhLp2sUhmOPG2d11Sp5022D8QQQ9nEoCxKDgcKEbY3TBmoARCqBjZWh');
// //     req.send(jsonData);
// // }
// var req = new  XMLHttpRequest();
// req.onreadystatechange = function () {
//     if(this.readyState == 4 && this.status == 201){
//         alert(this.responseText);
//     }
// }
// req.open('POST', CREATSONG_API, true);
// req.setRequestHeader('Content-type','application/json;charset=UTF-8');
// req.setRequestHeader('Authorization',  'Basic '+localStorage.getItem('token'));
// req.send(jsonData);


var CREATSONG_API = "https://2-dot-backup-server-002.appspot.com/_api/v2/songs";
var song = {
    name:'BaiCaTuoiTre',
    description: " xuanhung24011@gmail.com ",
    singer: "Hung",
    author: "Author",
    thumbnail: "http://song-thumbnail.png" ,
    link: "https://c1-ex-swe.nixcdn.com/NhacCuaTui921/BaiCaTuoiTre-DaLABLinhCaoMelG-4452195.mp3"
}
var a = localStorage.getItem('token');
var req = new  XMLHttpRequest();
req.onreadystatechange = function () {
    if(this.readyState == 4 && this.status == 201){
        alert(this.responseText);
    }
}
req.open('POST', CREATSONG_API, true);
req.setRequestHeader('Content-type','application/json;charset=UTF-8');
req.setRequestHeader('Authorization',  'Basic '+localStorage.getItem('token'));
req.send(JSON.stringify(song));
