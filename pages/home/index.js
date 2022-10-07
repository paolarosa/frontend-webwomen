function createCard(jobsData) {

    let tagLi = document.createElement("li")
    let tagJob = document.createElement("h3")
    let tagCompanyCity = document.createElement("div")
    let tagCompany = document.createElement("h4")
    let tagCity = document.createElement("p")
    let tagDescription = document.createElement("p")
    let tagTypeButton = document.createElement("div")
    let tagTypes = document.createElement("div")
    let tagType1 = document.createElement("p")
    let tagType2 = document.createElement("p")
    let tagButton = document.createElement("button")

    tagLi.classList.add("li-cards")
    tagJob.classList.add("job-card")
    tagJob.innerText = `${jobsData.title}`
    tagCompanyCity.classList.add("company-city")
    tagCompany.classList.add("company-card")
    tagCompany.innerText = `${jobsData.enterprise}`
    tagCity.classList.add("city-card")
    tagCity.innerText = `${jobsData.location}`
    tagDescription.classList.add("description-card")
    tagDescription.innerText = `${jobsData.descrition}`
    tagTypeButton.classList.add("type-button")
    tagTypes.classList.add("types")
    tagType1.classList.add("type-job-card")
    tagType2.classList.add("type-job-card")
    tagType1.innerText = `${jobsData.modalities[0]}`
    tagType2.innerText = `${jobsData.modalities[1]}`
    tagButton.classList.add("button-card")
    tagButton.innerText = "Candidatar"
    tagButton.id = `${jobsData.id}`

    tagTypes.append(tagType1, tagType2)
    tagTypeButton.append(tagTypes, tagButton)
    tagCompanyCity.append(tagCompany, tagCity)
    tagLi.append(tagJob, tagCompanyCity, tagDescription, tagTypeButton)
    return tagLi
}

function renderCard(jobsData) {
    let tagUl = document.querySelector(".ul-cards")

    jobsData.forEach((element, index, array) => {
        const card = createCard(element)
        tagUl.appendChild(card)
    })
}
renderCard(jobsData)


function createCardSelected(lista) {
    let ulSelected = document.querySelector(".ul-selected")
    ulSelected.innerHTML = ""

    lista.forEach((element) => {

        let tagLi = document.createElement("li")
        let tagJobButton = document.createElement("div")
        let tagJob = document.createElement("h3")
        let tagButton = document.createElement("button")
        let tagCompanyCity = document.createElement("div")
        let tagCompany = document.createElement("h4")
        let tagCity = document.createElement("p")

        tagLi.classList.add("li-selected")
        tagJobButton.classList.add("job-button")
        tagJob.classList.add("job-selected")
        tagJob.innerText = `${element.title}`
        tagButton.classList.add("trash-button")
        tagButton.id = `${element.id}`
        tagButton.innerHTML = "<img src='../../assets/img/trash.svg'>"
        tagCompanyCity.classList.add("company-city-selected")
        tagCompany.classList.add("company-card")
        tagCompany.innerText = `${element.enterprise}`
        tagCity.classList.add("city-card")
        tagCity.innerText = `${element.location}`



        let botaoCandidatar = document.querySelectorAll(".button-card")
        tagButton.addEventListener("click", () => {

            let elemento = carrinho.find((element) => {

                if (+tagButton.id === element.id) {
                    return element
                }

            })

            const index = carrinho.indexOf(elemento)
            carrinho.splice(index, 1)
            createCardSelected(carrinho)
            addVazio()
            botaoCandidatar.forEach((elementCandidatar) => {
                if (elementCandidatar.id == tagButton.id) {
                    elementCandidatar.innerText = "Candidatar"
                }

            })

        })

        /*  let botao = document.querySelector(".button-card")
         
         tagButton.addEventListener("click", () => {
 
             let elemento = carrinho.find((element) => {
 
                 if (+tagButton.id === element.id) {
                     return element
                 }
             })
             botao.innerText = "Candidatar"
             const index = carrinho.indexOf(elemento)
             carrinho.splice(index, 1)
             createCardSelected(carrinho)
             addVazio()
         }) */

        tagCompanyCity.append(tagCompany, tagCity)
        tagJobButton.append(tagJob, tagButton)
        tagLi.append(tagJobButton, tagCompanyCity)
        ulSelected.appendChild(tagLi)

    })

}
/*  createCardSelected(jobsData) */


function renderCardSelected(jobsData) {
    let botao = document.querySelectorAll(".button-card")

  let teste = JSON.parse(localStorage.getItem("@kenzieVagas:vagasSelecionadas"))
    /* createCardSelected(teste) */
 


    botao.forEach((element1) => {
        element1.addEventListener("click", (event) => {
            event.preventDefault()

            let elemento2 = jobsData.find((element2) => element1.id == element2.id)



            if (element1.innerText == "Candidatar") {
                carrinho = [...carrinho, elemento2]
                console.log(carrinho)
                element1.innerText = "Remover candidatura"
                createCardSelected(carrinho)
                addVazio()
                localStorage.setItem("@kenzieVagas:vagasSelecionadas", JSON.stringify(carrinho))
                /*  setCart([...selected(), elemento2])
                  const selectedJson = JSON.stringify(selected())
                  localStorage.setItem("selected",selectedJson) */
            }
            else {
                const index = carrinho.indexOf(elemento2)
                element1.innerText = "Candidatar"
                carrinho.splice(index, 1)
                createCardSelected(carrinho)
                addVazio()
            }

            /* const store = localStorage.getItem('selecionados')
            if(!store){
                localStorage.setItem('selecionados', true)
            } */
        })
    })
}
renderCardSelected(jobsData)


function addVazio() {
    let divEmpty = document.querySelector(".without-selected")
    let ulSelected = document.querySelector(".ul-selected")

    if (carrinho.length > 0) {
        ulSelected.classList.remove("hidden")
        divEmpty.classList.add("hidden")
    } else {
        ulSelected.classList.add("hidden")
        divEmpty.classList.remove("hidden")
    }
}



/* function localStorageLocation() {
    localStorage.getItem("@kenzieVagas:VagasSelecionadas")
}


localStorage.setItem("@kenzieVagas:VagasSelecionadas", JSON.stringify()) */

