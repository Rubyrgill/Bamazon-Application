# Bamazon-Application
```
Amazon-like storefront using MySQL &amp; Node.js
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
  
   #### 2. Enter product : Blue Notebook
  ```
   * Upon entering the product listed in table, new prompt will ask for the quanitity 
  ```
   #### 3. Enter Quantity : "#"
  ```
   * Upon entering the quantity (e.g. 3), the terminal will display new table with updated stock quanitity left for product ordered
   * Prompt one will display to ask if customer wants to order product
  ```
   #### 4. Press C to Cancel
  ```
   * To exit the store order option press "C" 
  ```
   #### 5. Invalid Order
  ```
   * If customer enters product that is NOT listed, terminal will display message
  ```
   #### 6. Sold Out
  ```
   * If the quantity entered is higher then the stock quantity of the product then sold out message will appear
  ```
  

