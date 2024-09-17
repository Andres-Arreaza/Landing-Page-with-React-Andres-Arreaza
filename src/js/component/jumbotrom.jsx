import React from "react";

export const Jumbotrom = () => {
    let textos = {
        titulo: "A Warm Welcome!",
        parrafo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam eum voluptatibus deserunt, molestias maiores accusantium repellendus quia consectetur voluptatem laborum! Asperiores sunt, libero dolorem error sint possimus voluptatum sapiente eveniet!",
        button: "Call to action!"
      }
    return (
        <div class="p-5 mb-4 bg-light rounded-3">
            <div class="container-fluid py-5 ">
                <h3 class="display-5 fw-bold text-start ">{textos.titulo}</h3>
                <p class="col-md-12 fs-4 text-start w-100">{textos.parrafo}</p>
                <a class="btn btn-primary btn-lg float-start" role="button" href="#">{textos.button}</a>
            </div>
        </div>
    );
};