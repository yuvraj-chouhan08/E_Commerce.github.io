# Ecommerce API
The E-commerce API is built using Node.js, Express.js, and MongoDB, providing functionality for the admin to manage their product inventory. The API allows for viewing the inventory, creating new products, deleting existing products, and updating the quantity of products.

Tech Stack:
- Node.js: A JavaScript runtime environment that allows running JavaScript on the server-side.
- Express.js: A web application framework for Node.js, used for handling server-side logic and creating RESTful APIs.
- MongoDB: A NoSQL database used for storing and retrieving product inventory data.

Functionality:
1. View Inventory: The API provides endpoints to retrieve the product inventory, allowing the admin to view all the products currently available.

2. Create Products: The API includes endpoints for creating new products in the inventory. The admin can provide details such as product name, description, price, and quantity.

3. Delete Product: The API provides an endpoint to delete a specific product from the inventory based on its unique identifier.

4. Update Quantity of Products: The API allows the admin to update the quantity of a product in the inventory. The admin can specify the product ID and the new quantity to update the stock.

## Setup

   After cloning, use "npm install" and serve the app using "node server". The example provided here are from Postman.

    localhost:3000/api/v1 
    
   ![image](https://github.com/Riteshk229/Ecommerce-API/assets/100128015/44f43653-f804-4923-a301-a24feee81540)

## 1. View Inventory 

   Admin can view all the products available in inventory and sending a `GET` request.
   
    /products
    
   ![image](https://github.com/Riteshk229/Ecommerce-API/assets/100128015/89e60dcc-b9ea-4a98-8ed6-2558d5ee8137)

   ### Response

   ![image](https://github.com/Riteshk229/Ecommerce-API/assets/100128015/cb291603-3e62-41af-9785-4649cc093c50)


## 2. Create Products
   Admin can enter new products by specifying the name and quantity in form  and sending a `POST` request.

    /products/create
   
   ![image](https://github.com/Riteshk229/Ecommerce-API/assets/100128015/934e0d46-02e3-4dee-ba1d-b8ab670c8953)
    
   ## Response
   
   ![image](https://github.com/Riteshk229/Ecommerce-API/assets/100128015/570738a3-a514-454c-a542-3e8d15824a65)
   
## 3. Delete Products
  
   Admin can delete products by passing the the product id and sending a `DELETE` request.
  
      /products/:id
    
   ![image](https://github.com/Riteshk229/Ecommerce-API/assets/100128015/a536195d-8a62-4bae-8066-71cddd412c70)
   
   ### Response
   
   ![image](https://github.com/Riteshk229/Ecommerce-API/assets/100128015/ab18a932-7ba0-4ce7-9f12-03828a13d85a)

## 4. Update Quantity of Products

   Admin can update  the quantity of a product by passing the product id and the quantity by which the product may be incremented or        decremented by and sending a `post` Request.
   
    /products/:id/update_quantity/?number=100
    
   ![image](https://github.com/Riteshk229/Ecommerce-API/assets/100128015/a244aa5f-0d84-49b6-9a05-48ae70370204)
   
   ### Response
   
   ![image](https://github.com/Riteshk229/Ecommerce-API/assets/100128015/c337fd29-1dfa-4341-90d8-88a818ed02dc)
   
   
   ## Folder Structure
   
```
Ecommerce-API
    |
    |                  |--->css
    |--->assets------->|--->img
    |                  |---> js
    |
    |--->config------->|--->mongoose.js
    |              
    |
    |                  
    |--->controllers-->|-->api-->|-->vi-->|-->productController.js
    |                  |-->homeController.js
    |
    |     
    |
    |--->models------->|-->products.js             
    |                  
    |--->routes------->|---->api------>|------>vi----->|-->product.js
    |                  |---->index.js                  |---->index.js
    |
    |
    |-->.gitignore
    |--> index.js
    |--> package-lock.json
    |-->package.json
    
 ````


