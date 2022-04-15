const Database = [
    {
      itemName: "ford",
      itemPrice: 19000,
      itemCode: "FD",
    },
    {
      itemName: "Tesla",
      itemPrice: 12000,
      itemCode: "s",
    },
    {
      itemName: "Toyota",
      itemPrice: 23000,
      itemCode: "SUV",
    },
    {
      itemName: "Apple",
      itemPrice: "110 per dozen",
      itemCode: "A1",
    },
    {
      itemName: "Orange",
      itemPrice: "99 per dozen",
      itemCode: "B",
    },
    {
      itemName: "Toothbrush",
      itemPrice: 25,
      itemCode: "c",
    },
    {
      itemName: "T-shirt",
      itemPrice: 299,
      itemCode: "M",
    },
    {
      itemName: "Trowser",
      itemPrice: 499,
      itemCode: "XL",
    },
  ];
  
  // select Element passed in
  function selectElement(selector) {
    return document.querySelector(selector);
  }
  // clear the contant inside the  search result
  function clearResult() {
    selectElement(".search_result").innerHTML = "";
  }
  function getResult() {
    const search = selectElement(".searchbar").value;
    clearResult();
    if (search.length > 0) {
      for (let i = 0; i < Database.length; i++) {
        if (
          Database[i].itemName
            .toLocaleLowerCase()
            .includes(search.toLocaleLowerCase()) ||
          Database[i].itemCode
            .toLocaleLowerCase()
            .includes(search.toLocaleLowerCase())
        ) {
          selectElement(".search_result").innerHTML += `
                   <div class="search_result_item"> 
                   <span class="search_item">${Database[i].itemName}</span>
                   <span class="search_item">${Database[i].itemPrice}</span>
                   <span class="search_item">${Database[i].itemCode}</span>
                   </div>
                   `;
                  }
                }
              }
            }
                   
                   
                   
  selectElement(".searchbar").addEventListener("keyup", getResult);
