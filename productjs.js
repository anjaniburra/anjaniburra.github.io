let name;
let Description;
let Model;
let Type;
function add()
 {
   
        name = document.getElementById("productName").value;
        localStorage.setItem("name",name);
        Description = document.getElementById("productDescription").value;
        localStorage.setItem("Description",Description);
        Model= document.getElementById("productModel").value;
        localStorage.setItem("Model",Model);
        Type = document.getElementById("productType").value;
        localStorage.setItem("Type",Type);
        console.log("1" + name, Description, Model, Type)
}
let n=[];
        let desc=[];
        let mod=[];
        let t=[];


