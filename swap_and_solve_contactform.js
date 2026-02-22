let contacts =[];

function Contact(Name, Email, PhoneNumber) {
    this.Name = Name;
    this.Email = Email;
    this.PhoneNumber = PhoneNumber;
}
function addNewContact() {
   const Name = document.getElementById("inputName").value;
   const Email = document.getElementById("inputEmail").value;
   const PhoneNumber = document.getElementById("inputPhoneNumber").value;
}
if (Name&& Email && PhoneNumber){
const newContact = new Contact(Name, Email, PhoneNumber)
contacts.push(newContact)}