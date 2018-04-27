export const oneStyle = `
<link href="https://fonts.googleapis.com/css?family=Lato:300" rel="stylesheet">
<style>
    body {
         font: 100% "Lato", sans-serif;
         font-weight: 300 !important;
         color: #333;
         background-color: white;
         margin: 0 !important;
         line-height: 1.5;
         min-height: 100vh; 
     }
    iron-icon {
        width: 55px; height: auto;
        color: blue;
        --iron-icon-height: 52px;
        --iron-icon-width: 52px;
        /*--iron-icon-fill-color: (#grad1);*/
        fill: url(#one-gradient);
    }
    /*one-navbar {*/
        /*position: fixed;*/
        /*top: 0px;*/
        /*left: 0px;*/
        /*width: 100%;*/
        /*z-index: 500;*/
        /*!*--one-background: green;*!*/
        /*!*background-color: pink;*!*/
    /*}*/
    one-navbar-item {
        width: 40px;
        --one-icon-size: 30px;
        /*background: blue;*/
    }

    button {
        font-family: inherit;
        font-weight: inherit;
        font-size: 100%;
        background: var(--one-background, #333);
        border-radius: 0px;
        border: 0px;
        padding: 10px 15px 10px 15px;
        color: white;
        cursor: pointer;

    }
    button:hover {
        opacity: 0.8;
    }
    button:focus {
        outline: none;
    }
    a {
        text-decoration: none !important;
        color: white;
    }
    input {
       
    }
    input:required:invalid, input:focus:invalid {
      /* this should be styled by the user in the stylesheet */
      /*check the project from IMPACT*/
      
    }
</style>`;
