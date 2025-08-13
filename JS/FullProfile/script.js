console.log("page loaded");

let currentName ='Jane Doe';
function startNameEdit() {
    let nameElement = document.getElementById('user-name');
    let currentName = nameElement.textContent;

    nameElement.outerHTML = `
        <input 
            type="text" 
            id="name-input"
            class="user-name" 
            value="${currentName}"
            onblur="submitNameEdit()" 
            onkeydown="if (event.key === 'Enter') submitNameEdit()"
            autofocus
        >
    `;
}

function submitNameEdit() {
    let nameInput = document.getElementById('name-input');
    let newName = nameInput.value.trim();

    displayName = newName || currentName
    nameInput.outerHTML = `<h1 id="user-name">${displayName}</h1>`;
    currentName = displayName;
}

function acceptRequest(element) {
    let requestRow = element.closest('.req-record')
    let personReq = requestRow.querySelector(".person-req")
    let connectionList = document.querySelector('.connection-list');
    let viewMore = connectionList.querySelector('.view-more');

    let newConnection = document.createElement('div');
    newConnection.className = 'req-record';
    newConnection.appendChild(personReq.cloneNode(true));
    

    connectionList.insertBefore(newConnection, viewMore);
    updateRequestsNumber();
    updateConnectionsNumber()
    
    requestRow.remove();
}
function declineRequest(element) {
    let requestRow = element.closest('.req-record')
    requestRow.remove();
    updateRequestsNumber();
}
function updateRequestsNumber() {
    let requestNumber = document.getElementById('reqNumbers')
    let currentReqNumber = parseInt(requestNumber.innerText);
    currentReqNumber--
    requestNumber.innerText = currentReqNumber
}
function updateConnectionsNumber() {
    let connectionsNumber = document.getElementById('connectionsNumber')
    let currentConNumber = parseInt(connectionsNumber.innerText);
    currentConNumber++
    connectionsNumber.innerText = currentConNumber
}