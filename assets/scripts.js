let productos = ''

for (let i = 0; i < 20; i++) {
  const name = faker.name.lastName()
  const city = faker.address.country()
  const ocupassion = faker.name.jobTitle()
  const address = faker.address.secondaryAddress()
  const phone = faker.phone.phoneNumber()
  const email = faker.internet.email()
  const aspiracion_salarial = faker.finance.account()
  const edad = []
  
    
    for (let i = 0; i < 1; i++) {
        edad[i] = parseInt(Math.random()* 60);
    }


productos += `{ "name": "${name}", "city": "${city}", "ocupassion": "${ocupassion}", "address": "${address}", "phone": "${phone}", "email": "${email}", "aspiracion_salarial": ${aspiracion_salarial}, "edad": "${edad}"},`
}

console.log(productos)

/* ◘ taller Mongo

> use taller
switched to db taller
> db.taller.insertMany([{ "name": "Bashirian", "city": "Cuba", "ocupassion": "Future Functionality Producer", "address": "Suite 505", "phone": "(972) 657-6955 x220", "email": "Phoebe.Johns63
@hotmail.com", "aspiracion_salarial": 29905526, "edad": "33"},{ "name": "Herzog", "city": "El Salvador", "ocupassion": "Central Usability Designer", "address": "Suite 818", "phone": "(204) 9
19-9028", "email": "Mathias83@gmail.com", "aspiracion_salarial": 91224850, "edad": "9"},{ "name": "Okuneva", "city": "Tajikistan", "ocupassion": "National Metrics Engineer", "address": "Suit
e 783", "phone": "939-967-0296 x83705", "email": "Unique37@hotmail.com", "aspiracion_salarial": 97419559, "edad": "22"},{ "name": "Bergstrom", "city": "Greenland", "ocupassion": "Investor Me
trics Developer", "address": "Apt. 086", "phone": "310.543.6790 x324", "email": "Elsa68@yahoo.com", "aspiracion_salarial": 37330028, "edad": "3"},{ "name": "Rath", "city": "Bosnia and Herzeg
ovina", "ocupassion": "Customer Web Architect", "address": "Apt. 351", "phone": "(784) 598-5314 x4915", "email": "Angel.Wisozk@gmail.com", "aspiracion_salarial": 90227051, "edad": "43"},{ "n
ame": "O'Kon", "city": "Denmark", "ocupassion": "Internal Markets Consultant", "address": "Suite 463", "phone": "343-961-4365", "email": "Lulu2@yahoo.com", "aspiracion_salarial": 38439654, "
edad": "20"},{ "name": "Runolfsdottir", "city": "Singapore", "ocupassion": "Forward Branding Manager", "address": "Apt. 999", "phone": "369.597.6321", "email": "Heather_Buckridge@hotmail.com
", "aspiracion_salarial": 04316428, "edad": "43"},{ "name": "Deckow", "city": "Costa Rica", "ocupassion": "Lead Metrics Architect", "address": "Suite 797", "phone": "399-402-4779", "email":
"Maribel_Hand@yahoo.com", "aspiracion_salarial": 42372313, "edad": "36"},{ "name": "Lebsack", "city": "Guadeloupe", "ocupassion": "Human Accountability Supervisor", "address": "Apt. 107", "p
hone": "692-455-4339 x36786", "email": "Mike_Hansen@gmail.com", "aspiracion_salarial": 61210191, "edad": "58"},{ "name": "Ortiz", "city": "Bulgaria", "ocupassion": "Corporate Research Design
er", "address": "Apt. 850", "phone": "(799) 267-2557", "email": "Efrain.Gerlach@hotmail.com", "aspiracion_salarial": 34650162, "edad": "15"},{ "name": "Considine", "city": "Antigua and Barbu
da", "ocupassion": "Principal Assurance Executive", "address": "Apt. 379", "phone": "598-929-2766", "email": "Breanna_Hamill@yahoo.com", "aspiracion_salarial": 89720899, "edad": "40"},{ "nam
e": "Breitenberg", "city": "Bolivia", "ocupassion": "Investor Quality Specialist", "address": "Suite 858", "phone": "870.455.2557 x078", "email": "Nathanael_Hansen@gmail.com", "aspiracion_sa
larial": 30275808, "edad": "13"},{ "name": "Lind", "city": "Slovenia", "ocupassion": "Human Security Engineer", "address": "Suite 317", "phone": "238.814.3414 x1660", "email": "Salvador.Smit
h@yahoo.com", "aspiracion_salarial": 12970289, "edad": "23"},{ "name": "Lakin", "city": "Brunei Darussalam", "ocupassion": "Senior Interactions Strategist", "address": "Suite 998", "phone":
"754-242-3000 x420", "email": "Cindy38@yahoo.com", "aspiracion_salarial": 86045524, "edad": "58"}])
{
        "acknowledged" : true,
        "insertedIds" : [
                ObjectId("5f9ad65419a9284d5e87199f"),
                ObjectId("5f9ad65419a9284d5e8719a0"),
                ObjectId("5f9ad65419a9284d5e8719a1"),
                ObjectId("5f9ad65419a9284d5e8719a2"),
                ObjectId("5f9ad65419a9284d5e8719a3"),
                ObjectId("5f9ad65419a9284d5e8719a4"),
                ObjectId("5f9ad65419a9284d5e8719a5"),
                ObjectId("5f9ad65419a9284d5e8719a6"),
                ObjectId("5f9ad65419a9284d5e8719a7"),
                ObjectId("5f9ad65419a9284d5e8719a8"),
                ObjectId("5f9ad65419a9284d5e8719a9"),
                ObjectId("5f9ad65419a9284d5e8719aa"),
                ObjectId("5f9ad65419a9284d5e8719ab"),
                ObjectId("5f9ad65419a9284d5e8719ac")
        ]
}
> db.taller.insertMany([{ "name": "Langworth", "city": "Macedonia", "ocupassion": "Lead Solutions Architect", "address": "Suite 560", "phone": "(987) 902-7315 x0258", "email": "Mohammed86@gm
ail.com", "aspiracion_salarial": 43042963, "edad": "8"},{ "name": "Pacocha", "city": "United States of America", "ocupassion": "National Security Assistant", "address": "Suite 735", "phone":
 "416-292-2429 x117", "email": "Julie_Deckow@yahoo.com", "aspiracion_salarial": 83393773, "edad": "53"},{ "name": "Mueller", "city": "Paraguay", "ocupassion": "Principal Web Strategist", "ad
dress": "Suite 705", "phone": "783-645-6586 x20067", "email": "Annie_Brown@hotmail.com", "aspiracion_salarial": 73772096, "edad": "51"},{ "name": "Lubowitz", "city": "India", "ocupassion": "
Global Brand Planner", "address": "Apt. 622", "phone": "746.294.1296", "email": "Jayson.Jerde@yahoo.com", "aspiracion_salarial": 06630891, "edad": "9"},{ "name": "Runolfsson", "city": "Saint
 Lucia", "ocupassion": "National Accountability Liaison", "address": "Suite 120", "phone": "339.270.4155", "email": "Rogers32@gmail.com", "aspiracion_salarial": 01924232, "edad": "46"},{ "na
me": "Denesik", "city": "Moldova", "ocupassion": "Customer Creative Engineer", "address": "Suite 965", "phone": "(737) 255-5521", "email": "Oceane.Stiedemann75@hotmail.com", "aspiracion_sala
rial": 70550150, "edad": "9"}])
{
        "acknowledged" : true,
        "insertedIds" : [
                ObjectId("5f9ad67319a9284d5e8719ad"),
                ObjectId("5f9ad67319a9284d5e8719ae"),
                ObjectId("5f9ad67319a9284d5e8719af"),
                ObjectId("5f9ad67319a9284d5e8719b0"),
                ObjectId("5f9ad67319a9284d5e8719b1"),
                ObjectId("5f9ad67319a9284d5e8719b2")
        ]
}
◘ aumento de salario

> db.taller.updateMany({"city":"Costa Rica" },{ $inc:{"aspiracion_salarial":892000000000}})
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
> db.taller.find({"city":"Costa Rica"})
{ "_id" : ObjectId("5f9ad65419a9284d5e8719a6"), "name" : "Deckow", "city" : "Costa Rica", "ocupassion" : "Lead Metrics Architect", "address" : "Suite 797", "phone" : "399-402-4779", "email"
: "Maribel_Hand@yahoo.com", "aspiracion_salarial" : 1784047372313, "edad" : "36" }

◘ eiminar menores de 18 años

> db.taller.deleteMany({"edad":{$lt:"18"}})
{ "acknowledged" : true, "deletedCount" : 2 }
> db.taller.find().length()
18
>
*/


