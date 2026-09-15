const txtCatName = document.getElementById("txtCatName");
const txtCatDesc = document.getElementById("txtCatDesc");
const btnAdd = document.getElementById("btnAdd");

const tableBody = document.getElementById("listIncomeCat");
const categoryBadge = document.getElementById("categoryBadge");



// Update number of categories
function updateBadge() {

    const rowCount = tableBody.querySelectorAll("tr").length;

    categoryBadge.textContent = Active Categories: ${rowCount};

}




// Add category button

btnAdd.addEventListener("click", function(){


    const categoryName = txtCatName.value.trim();

    const categoryDesc = txtCatDesc.value.trim();



    if(categoryName === "" || categoryDesc === ""){

        alert("Please fill in all fields.");

        return;

    }



    const row = document.createElement("tr");



    row.innerHTML = `

        <td class="fw-semibold">
            ${categoryName}
        </td>


        <td>

            ${categoryDesc}


            <button 
            class="btn btn-danger btn-sm float-end"
            onclick="deleteCategory(this)">

            Delete

            </button>


        </td>

    `;



    tableBody.appendChild(row);



    updateBadge();



    txtCatName.value = "";

    txtCatDesc.value = "";


});





// Delete category

function deleteCategory(button){


    button.closest("tr").remove();


    updateBadge();


}
