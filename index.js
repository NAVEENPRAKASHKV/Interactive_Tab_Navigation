const content = [
    [
      "React is extremely popular",
      "It makes building complex, interactive UIs a breeze",
      "It's powerful & flexible",
      "It has a very active and versatile ecosystem"
    ],
    [
      "Components, JSX & Props",
      "State",
      "Hooks (e.g., useEffect())",
      "Dynamic rendering"
    ],
    [
      "Official web page (react.dev)",
      "Next.js (Fullstack framework)",
      "React Native (build native mobile apps with React)"
    ]
  ];

  const btnWhyReact =document.getElementById("btn-why-react")
  const btnCoreFeature =document.getElementById("btn-core-feature")
  const btnResorce =document.getElementById("btn-resourse")
  const tabContent = document.getElementById("tab-content")


const HighlightBtn=(btn)=>{
    btnWhyReact.className=""
    btnCoreFeature.className=""
    btnResorce.className=""
    btn.className="active"
}
const displayContent = (data)=>{
    let listData=""
    
    for(let i of data){
        listData+=`<li>${i}</li>`
    }
   const list =document.createElement("ul")
    const parent =document.getElementById("tab-content")
    parent.innerHTML=""
    list.innerHTML=listData
    parent.appendChild(list)

}


displayContent(content[0])

function handleClick(event){
    const btnId = event.target.id
    HighlightBtn(event.target)

    if(btnId==="btn-why-react") displayContent(content[0])
    else if (btnId==="btn-core-feature") displayContent(content[1])
    else if (btnId==="btn-resourse") displayContent(content[2])

}







  btnWhyReact.addEventListener('click',handleClick)
  btnCoreFeature.addEventListener('click',handleClick)
  btnResorce.addEventListener('click',handleClick)