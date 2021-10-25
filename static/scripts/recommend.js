
function recommend() {
    $.ajax({
        type: "GET",
        url: "/recommend/read",
        data: {},
        success: function (response) {
            let recipes = response['recipes']
            for (let i = 0; i < recipes.length; i++) {
                let ing = recipes[i]['ingredients']
                let name = recipes[i]['name']
                let like = recipes[i]['like']

                let temp_html = `<a href="/recipe" onclick="search_recipe('${name}')">
                                    <div class="recipes_all_about">
                
                                        <div class="recipes_img">
                                            <a>
                                                <img src="../static/recipe-image/${name}.png" class="list-img-cook" alt="요리 이미지">
                                            </a>
                                        </div>
                
                                        <div class="recipes_information">
                                            <div class="recipes_title" id="index${i}">
                                                <h3> ${name} </h3>
                                            </div>
                
                                            <div class="recipes_desc">
                                                <p>
                                                    재료 : ${ing}
                                                </p>
                                            </div>
                
                                            <div class="recipes_like">
                                            <footer class="card-footer">
                                                    <a href="#" onclick="likeStar('${name}')" class="card-footer-item has-text-info">
                                                    ${like}
                                                        <span class="icon">
                                              <i class="fas fa-thumbs-up"></i>
                                                    </a>
                                        </div>
                                    </div>
                                            </a>`

                $('.recipe-box').append(temp_html)
            }
        }
    })
}

function likeStar(name) {
                $.ajax({
                    type: 'POST',
                    url: '/recipe/like',
                    data: {name_give:name},
                    success: function (response) {
                        alert(response['msg']);
                        window.location.reload()
                    }
                });
            }