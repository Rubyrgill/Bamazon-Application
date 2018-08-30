# Bamazon-Application
```
Amazon-like storefront using MySQL & Node.js
```
## Tools Used:
```
* MySQL 
* Node.js
* Javascript 

```

## Getting Started:
1. Set up MySql Database: 
      ```
     1. Create a database 
     2. Create a table with the following columns:
          * item_id (unique id for each product)
          * product_name (Name of product)
          * department_name
          * price (cost to customer)
          * stock_quantity (how much of the product is available in stores)
     3. Input 10 products of your choice 
      ```
2. Enter the following into terminal to set up MySQL & Inquirer
      ```
        npm install mysql
        npm install inquirer
      ```

## How it works in TERMINAL: 
  
 #### 1. node bamazonCustomer.js
  ```
   * Displays the list of products from the database including; id, name, department, price, and stock quanitity. 
   * Prompts question for customer to pick a product to order 
  ```
  <img width="713" alt="screen shot 2018-08-30 at 5 40 39 pm" src="https://user-images.githubusercontent.com/38548548/44881645-5e22dd00-ac7e-11e8-979d-9e07d2496696.png">
  
   #### 2. Enter product : Blue Notebook
  ```
   * Upon entering the product listed in table, new prompt will ask for the quanitity 
  ```
  <img width="655" alt="screen shot 2018-08-30 at 5 45 36 pm" src="https://user-images.githubusercontent.com/38548548/44881653-6713ae80-ac7e-11e8-8dd1-cbd307a10f82.png">

   #### 3. Enter Quantity : "#"
  ```
   * Upon entering the quantity (e.g. 3), the terminal will display new table with updated stock quanitity left for product ordered
   * Prompt one will display to ask if customer wants to order product
  ```
  <img width="545" alt="screen shot 2018-08-30 at 5 45 50 pm" src="https://user-images.githubusercontent.com/38548548/44881659-6aa73580-ac7e-11e8-8953-b6d88ca2bb1b.png">

   #### 4. Press C to Cancel
  ```
   * To exit the store order option press "C" 
  ```
  
   #### 5. Invalid Order
  ```
   * If customer enters product that is NOT listed, terminal will display message
  ```
  <img width="361" alt="screen shot 2018-08-30 at 5 45 58 pm" src="https://user-images.githubusercontent.com/38548548/44881667-6f6be980-ac7e-11e8-89c3-a2f33618512a.png">

   #### 6. Sold Out
  ```
   * If the quantity entered is higher then the stock quantity of the product then sold out message will appear
  ```
  <img width="553" alt="screen shot 2018-08-30 at 5 48 53 pm" src="https://user-images.githubusercontent.com/38548548/44881694-83175000-ac7e-11e8-8c81-e1b852bfae9b.png">
<img width="595" alt="screen shot 2018-08-30 at 5 50 39 pm" src="https://user-images.githubusercontent.com/38548548/44881709-8dd1e500-ac7e-11e8-9fca-7daba16dbb97.png">

