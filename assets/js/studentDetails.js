console.log("Here, I am : information.js");

let tableBody = document.getElementById('tableBody');

let xhr = new XMLHttpRequest();
xhr.open('GET', 'studentDetails.json', true);

xhr.onload = function () {
    // console.log(this.responseText);
    let dataObj = JSON.parse(this.responseText);
    let content = "";
    // console.log(dataObj);
    dataObj.forEach(function (element, index) {
        console.log(element);
        let html = `<tr>
                        <td class="text-center">${index + 1}</td>
                        <td>${element.name}</td>
                        <td>${element.college}</td>
                        <td>${element.city}</td>
                        <td>
                            <a href="#" class="btn-outline-success" data-bs-toggle="modal" data-bs-target="#staticBackdrop${index}">View Details</a>
                            <div class="modal fade" id="staticBackdrop${index}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="staticBackdropLabel">Student Information</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <p><strong>Name</strong>: ${element.name}</p>
                                            <p><strong>Birthdate</strong>: ${element.birthdate}</p>
                                            <p><strong>Gender</strong>: ${element.gender}</p>
                                            <p><strong>Father's Name</strong>: ${element.fatherName}</p>
                                            <p><strong>College</strong>: ${element.college}</p>
                                            <p><strong>Address</strong>: ${element.address}</p>
                                            <p><strong>City</strong>: ${element.city}</p>
                                            <p><strong>State</strong>: ${element.state}</p>
                                            <p><strong>Country</strong>: ${element.country}</p>
                                            <p><strong>Pin Code</strong>: ${element.pinCode}</p>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Understood</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>`;
        content += html;
    });
    tableBody.innerHTML = content;
}

xhr.send();