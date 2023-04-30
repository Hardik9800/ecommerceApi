# Ecommerce-api:-

an API for an ecommerce platform admin to manage product inventory

### how to run file

* download zip file
* extract zip file in your sytem
* open file in VS code
* open terminal in Vs code
* run command npm i
* run command node index.js


## How to call API

#### open PostMan Application and run these commands

* for creating an Admin Id  __localhost:8500/admin/create__.
* to Login an Admin Id __localhost:8500/admin/login__.
* then Token of jwt will generated copy that token and go to head,in key write Authorisation ,in value write Bearer and copy that token.
* for creating   __localhost:8500/products/create__  method: POST , here you have to give key as title and value as products.
* to list products  __localhost:8500/products__ method:Get.,To list all the products
* for deleting products   __localhost:8500/products/Id:__ method: Delete , here you have to give _id of the product which is to be deleted.
* to update quantity of a product (can be incremented or decremented)  __localhost:8500/products/:id/update_quantity__ method Post,In key write number,in value write the desired value.

![Screenshot (329)](https://user-images.githubusercontent.com/51282682/235378155-b5bc2272-fd4c-4d1d-96c5-77283be7da91.png)

![Screenshot (330)](https://user-images.githubusercontent.com/51282682/235378169-10df2d91-5626-4ec7-844a-3fb718da12e0.png)

