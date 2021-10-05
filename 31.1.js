// Your task is to convert the consumed promise not to use .then and .catch but 
// to use the modern way using async and await.
 
 
 const getIDs = () =>
 new Promise((resolve, reject) => {
 setTimeout(() => {
 resolve([532, 543, 753, 1, 5]);
 }, 1500);
 })


 const getRecipe = (recipeID) => {
    return new Promise((resolve, reject) => {
    setTimeout(
    (ID) => {
    const recipe = {
    title: "Fresh tomato pasta",
    publisher: "Pinchas Hodadad",
    };
    resolve(`${ID}: ${recipe.title}`);
    },
    1500,
    recipeID
    );
    });
   };
/*
   getIDs()
 .then((IDs) => {
 console.log(IDs);
 return getRecipe(IDs[2]);
 })
 .then((recipe) => {
 console.log(recipe);
 })
 .catch((error) => {
 console.log("It is an error!");
 });
*/

 async function recipedata(){
     try{
         const IDs = await getIDs();
         const receptId = await getRecipe(IDs[2]);
         console.log(IDs);
         console.log(receptId);
     }
     catch(error){
         console.log(error);
     }
 }
 
recipedata();  
