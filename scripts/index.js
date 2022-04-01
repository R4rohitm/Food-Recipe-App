


    // search

   

    var parent = document.getElementById("results")

    const getData = async (url) => {
        try {
            var input = document.getElementById("searchres").value;

            let res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`);

            let data = await res.json();

            let meal = data.meals;

            return meal;
        } catch (err) {
            console.log(err);
        }

    }



    const appendFood = (data) => {

        parent.innerHTML = null;

        data.forEach(({ idMeal, strArea, strCategory, strMeal, strMealThumb }) => {

            // console.log(strArea,strCategory,strMeal,strMealThumb);
            let div = document.createElement("div");
            div.setAttribute("id", "divtag")
            div.addEventListener("click",function(){

                foodItemDetails(idMeal)
            })

            let divimg = document.createElement('div');
            divimg.setAttribute('id', "divimg");
            let img = document.createElement('img');
            img.src = strMealThumb;

            divimg.append(img);

            let divinfo = document.createElement('div');
            divinfo.setAttribute('id', 'divinfo')

            let title = document.createElement('h3')
            title.innerText = strMeal;

            // let area = document.createElement('p')
            // area.innerText = `Area : ${strArea}`

            let category = document.createElement('p')
            category.innerText = `Category : ${strCategory}`

            divinfo.append(title,category)

            div.append(divimg, divinfo)

            parent.append(div)
        })

    }

    async function main() {
        try {
            let data = await getData();
            console.log(data)

            if (data == undefined) {
                return false;
            }
            appendFood(data)

        } catch (error) {
            console.log(error)
        }

    }
    
      let timerid;

        const debouncing = (main, delay) => {

            if (timerid) {

                clearTimeout(timerid)
            }

            timerid = setTimeout(function () {
                main()
            }, delay)
        }

        // fooditem

        var fooditem = document.getElementById("fooditem")

    const foodItemDetails= async (idMeal)=>{
        try{
            parent.innerHTML = null;
            let res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)

            let data = await res.json()

            let item = data.meals

            console.log(item)
            appendFoodItem(item)
        }catch(error){
            console.log(error)
        }
    }


    const appendFoodItem = (data) => {

            fooditem.innerHTML = null;

            data.forEach((el) => {

                let divleft = document.createElement('div');
                divleft.setAttribute('id','divleft')

                let divright = document.createElement('div');
                divright.setAttribute('id','divright')
                // console.log(strArea,strCategory,strMeal,strMealThumb);
                let thumb = document.createElement('img')
                thumb.src = el.strMealThumb

                let title = document.createElement('h3')
                title.innerText = el.strMeal

                let cat = document.createElement('h6')
                cat.innerText = `Category : ${el.strCategory}`

                let ingredient = document.createElement('h6')
                ingredient.innerText = "Ingredients :"

                divright.append(title, cat, ingredient)

                let ingredient1 = document.createElement('p')
                ingredient1.innerText = `${el.strIngredient1} : ${el.strMeasure1}`
                if(el.strIngredient1 != ""){
                    divright.append(ingredient1)
                }
                
                let ingredient2 = document.createElement('p')
                ingredient2.innerText = `${ el.strIngredient2 } : ${ el.strMeasure2 }`
                if (el.strIngredient2 != "") {
                    divright.append(ingredient2)
                }

                let ingredient3 = document.createElement('p')
                ingredient3.innerText = `${el.strIngredient3} : ${el.strMeasure3}`
                if (el.strIngredient3 != "") {
                    divright.append(ingredient3)
                }

                let ingredient4 = document.createElement('p')
                ingredient4.innerText = `${ el.strIngredient4 } : ${ el.strMeasure4 }`
                if (el.strIngredient4 != "") {
                    divright.append(ingredient4)
                }

                let ingredient5 = document.createElement('p')
                ingredient5.innerText = `${el.strIngredient5} : ${el.strMeasure5}`
                if (el.strIngredient5 != "") {
                    divright.append(ingredient5)
                }

                let ingredient6 = document.createElement('p')
                ingredient6.innerText = `${ el.strIngredient6 } : ${ el.strMeasure6 }`
                if (el.strIngredient6 != "") {
                    divright.append(ingredient6)
                }

                let ingredient7 = document.createElement('p')
                ingredient7.innerText = `${el.strIngredient7} : ${el.strMeasure7}`
                if (el.strIngredient7 != "") {
                    divright.append(ingredient7)
                }

                let ingredient8 = document.createElement('p')
                ingredient1.innerText = `${ el.strIngredient8 } : ${ el.strMeasure8 }`
                if (el.strIngredient8 != "") {
                    divright.append(ingredient8)
                }

                let ingredient9 = document.createElement('p')
                ingredient9.innerText = `${el.strIngredient9} : ${el.strMeasure9}`
                if (el.strIngredient9 != "") {
                    divright.append(ingredient9)
                }

                let ingredient10 = document.createElement('p')
                ingredient10.innerText = `${ el.strIngredient10 } : ${ el.strMeasure10 }`
                if (el.strIngredient10 != "") {
                    divright.append(ingredient10)
                }

                let ingredient11 = document.createElement('p')
                ingredient11.innerText = `${el.strIngredient11} : ${el.strMeasure11}`
                if (el.strIngredient11 != "") {
                    divright.append(ingredient11)
                }

                let ingredient12 = document.createElement('p')
                ingredient12.innerText = `${ el.strIngredient12 } : ${ el.strMeasure12 }`
                if (el.strIngredient12 != "") {
                    divright.append(ingredient12)
                }

                let ingredient13 = document.createElement('p')
                ingredient13.innerText = `${el.strIngredient13} : ${el.strMeasure13}`
                if (el.strIngredient13 != "") {
                    divright.append(ingredient13)
                }

                let ingredient14 = document.createElement('p')
                ingredient14.innerText = `${ el.strIngredient14 } : ${ el.strMeasure14 }`
                if (el.strIngredient14 != "") {
                    divright.append(ingredient14)
                }

                let ingredient15 = document.createElement('p')
                ingredient15.innerText = `${el.strIngredient15} : ${el.strMeasure15}`
                if (el.strIngredient15 != "") {
                    divright.append(ingredient15)
                }

                let instru = document.createElement('h6')
                instru.innerText = "Instructions :"

                let instructions = document.createElement('p')
                instructions.innerText = el.strInstructions

                let source = document.createElement('p')
                source.innerText = `Source: ${el.strSource}`

                let yt = document.createElement('p')
                yt.innerText = `YouTube - ${el.strYoutube}`

                let tags = document.createElement('p')
                tags.innerText = el.strTags


                divleft.append(thumb,source,yt)
                divright.append(instru,instructions)
                
                fooditem.append(divleft,divright)
            })

        }


