// //Bài 1 : viết 1 chuỗi và đảo ngược nó
// let str_input = prompt("Nhập chuỗi cần đảo ngược : ");
// let newInput ="";
// for(let i=str_input.length-1;i>=0;i--){
//     newInput = newInput+str_input[i];
    
// }
// console.log(newInput);

// //Bài 2 : Viết 1 chuỗi và in ra chuỗi với kí tự viết hoa
// let str = prompt("Nhập vào chuỗi bạn muốn : ");
//    let arr = str.split('');
// let newStr ="";

// for(let i=0;i<=str.length;i++){
//     if (i === str.indexOf(str[i])){
//         newStr = str.toUpperCase();
//         console.log(newStr);
//     }
// }

//Bài 3: xóa phần tử bị trùng của 1 mảng
let input3 = prompt("Nhập mảng :");
let arr = input3.split(',');
console.log(arr);
for(let j=0;i<arr.length;j++){
    if(j === )
}

//Bài 4 : 
// let check = true;
// while(check)
// {let member = [
//     {   
//         id: 1,
//         name : "Trung",
//         age : 23,
//         salary : "1000$",
//         mission : "member",
//     },
//     {   
//         id : 2,
//         name : "Thanh",
//         age : 26,
//         salary : "1500$",
//         mission : "member",
//     },
//     {   
//         id : 3,
//         name : "Quang",
//         age : 35,
//         salary : "2500$",
//         mission : "manager",
//     }
// ] 


// let input = prompt("Enter your command(new,update,delete,read)");
// if(input === "read"){
//     for(let i = 0;i<member.length;i++){
//         console.log(`#${i+1}. Name : ${member[i].name}`);
//         console.log(` Age : ${member[i].age}`);
//         console.log(` Salary : ${member[i].salary}`);
//         console.log(` Mission : ${member[i].mission}`);
//     }
// }
// else if(input === "new"){
//     let newName = prompt(`Enter new name : `);
//     let newAge = prompt(`Enter new age : `);
//     let newSalary = prompt(`Enter new salary : `);
//     let newMission = prompt(`Enter new mission : `);
//         let id = member.length  + 1 ;
//         let newMember = {
//             id : id,
//             name : newName,
//             age : newAge,
//             salary : newSalary,
//             mission : newMission,
//         }
//         member.push(newMember);
//         for(let i = 0 ; i<member.length ; i++){
//             console.log(`${i+1}.  ${(member[i].name)}`);
//             console.log(`${member[i].age}`);
        
//         }
// }
// else if(input === "delete"){
//     let input2 = Number(prompt("Enter Position "));
//         let index = input2 -1;
//         member.splice(index,1);
//         for(let i = 0 ; i<member.length ; i++){
//             console.log(`${i+1}.  ${(member[i].name)}`);

// }
// }
// else if (input === "update"){
//     let input2 = Number(prompt("Enter Position "));
//         let index = input2 -1;
//         for(let i = 0; i < member.length; i++){
//             if (index === member.indexOf(member[i])){
//                 let newInput = prompt("Enter new name : ")
//                 member[i].name = newInput;
//             }
//             console.log(` ${member[i].name}`);
            
//             }
// }
// else if (input === "exit"){
//     check = false;
// }else {
//     console.log("new/update/delete/read  ???");
// }
// }
