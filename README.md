# Softec Store

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.3.

## Project description
> - E-commerce consists of three pages (**products , orders , order details**) plus **cart sidebar** , **navbar** and **footer**.
> - The products that have quantities less than 5 is **highlighted** and the user can edit it's quantity.
> - The add to cart button is **disabled** when the user is editing the quantity or the quantity is equals to **zero**.
> - The user could open the cart sidebar and can  choose the **user of order** and the **payment method** then place order .
> - The cart is showing the number of added products inside it.
> - The orders page list all orders added to the system.
> - The order details page show all details of single order.

## Hosting URL: **https://softec-task-store.web.app**

## Project architecture
>   - app
>     - app component
>     - app-routing module
>     - app-module 
>     - components 
>       - cart component 
>       - navbar component 
>       - footer component 
>       - order
>         - order-details component  
>         - orders component
>           - order component 
>       - products
>         - product-card component 
>         - products component
>   - services 
>     - cart service
>     - data-storage service
>     - order service.
>     - orders-resolver service
>     - products service
>     - products-resolver service
>   - models
>     - order model
>     - product model
>     - user model
> - assets
>   - data
>     - order.json
>     - product.json
>     - user.json 
>   - scss
>     - style.scss

## For styling
> -  I used scss pre compiler for styling.
> - Also i used BEM css design pattern which knowen as block element modifier for styling which gives less code duplication.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.
