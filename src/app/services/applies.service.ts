import { serializeNodes } from "@angular/compiler/src/i18n/digest";

import { Injectable } from '@angular/core';

@Injectable()
export class AppliesService {

    private applies : Apply[] = [
        {
            filterID: "Financial",
            title: "Financial Controller",
            imgPath: "https://fakeimg.pl/300x300/282828/eae0d0/?retina=1&text=image",
            modalTitle: "Financial Controller",
            modalBody: "<p>Lorem ipsum dolor sit amet consectetur adipiscing elit sagittis fames nostra nibh risus, urna lacinia netus platea egestas euismod viverra mattis cum mauris.</p>" +
                "<p>Ullamcorper. Nostra a lectus platea porttitor cursus dignissim eros urna fusce hendrerit dictumst egestas parturient, morbi dapibus iaculis non eget praesent metus. Auctor id aliquet nibh quam. Tempus sollicitudin erat at potentinibh auctor leo primis habitasse dignissim a rutrum.</p>" +
                "<p>Localización: <strong>CDMX</strong><br> Sueldo: <strong>$$,$$$$ - $$,$$$ MXN</strong><br> Contrato: <strong>Permanente</strong></p>"
        },
        {
            filterID: "Financial",
            title: "Financial Manager",
            imgPath: "https://fakeimg.pl/300x300/282828/eae0d0/?retina=1&text=image",
            modalTitle: "Financial Manager",
            modalBody: "<p>Lorem ipsum dolor sit amet consectetur adipiscing elit sagittis fames nostra nibh risus, urna lacinia netus platea egestas euismod viverra mattis cum mauris.</p>" +
                "<p>Ullamcorper. Nostra a lectus platea porttitor cursus dignissim eros urna fusce hendrerit dictumst egestas parturient, morbi dapibus iaculis non eget praesent metus. Auctor id aliquet nibh quam. Tempus sollicitudin erat at potentinibh auctor leo primis habitasse dignissim a rutrum.</p>" +
                "<p>Localización: <strong>CDMX</strong><br> Sueldo: <strong>$$,$$$$ - $$,$$$ MXN</strong><br> Contrato: <strong>Permanente</strong></p>"
        },
        {
            filterID: "Sales",
            title: "Sales Executive",
            imgPath: "https://fakeimg.pl/300x300/282828/eae0d0/?retina=1&text=image",
            modalTitle: "Sales Executive",
            modalBody: "<p>Lorem ipsum dolor sit amet consectetur adipiscing elit sagittis fames nostra nibh risus, urna lacinia netus platea egestas euismod viverra mattis cum mauris.</p>" +
                "<p>Ullamcorper. Nostra a lectus platea porttitor cursus dignissim eros urna fusce hendrerit dictumst egestas parturient, morbi dapibus iaculis non eget praesent metus. Auctor id aliquet nibh quam. Tempus sollicitudin erat at potentinibh auctor leo primis habitasse dignissim a rutrum.</p>" +
                "<p>Localización: <strong>CDMX</strong><br> Sueldo: <strong>$$,$$$$ - $$,$$$ MXN</strong><br> Contrato: <strong>Permanente</strong></p>"
        },
        {
            filterID: "Sales",
            title: "Sales and Marketing Manager",
            imgPath: "https://fakeimg.pl/300x300/282828/eae0d0/?retina=1&text=image",
            modalTitle: "Sales and Marketing Manager",
            modalBody: "<p>Lorem ipsum dolor sit amet consectetur adipiscing elit sagittis fames nostra nibh risus, urna lacinia netus platea egestas euismod viverra mattis cum mauris.</p>" +
                "<p>Ullamcorper. Nostra a lectus platea porttitor cursus dignissim eros urna fusce hendrerit dictumst egestas parturient, morbi dapibus iaculis non eget praesent metus. Auctor id aliquet nibh quam. Tempus sollicitudin erat at potentinibh auctor leo primis habitasse dignissim a rutrum.</p>" +
                "<p>Localización: <strong>CDMX</strong><br> Sueldo: <strong>$$,$$$$ - $$,$$$ MXN</strong><br> Contrato: <strong>Permanente</strong></p>"
        },
        {
            filterID: "Sales",
            title: "Sales Manager",
            imgPath: "https://fakeimg.pl/300x300/282828/eae0d0/?retina=1&text=image",
            modalTitle: "Sales Manager",
            modalBody: "<p>Lorem ipsum dolor sit amet consectetur adipiscing elit sagittis fames nostra nibh risus, urna lacinia netus platea egestas euismod viverra mattis cum mauris.</p>" +
                "<p>Ullamcorper. Nostra a lectus platea porttitor cursus dignissim eros urna fusce hendrerit dictumst egestas parturient, morbi dapibus iaculis non eget praesent metus. Auctor id aliquet nibh quam. Tempus sollicitudin erat at potentinibh auctor leo primis habitasse dignissim a rutrum.</p>" +
                "<p>Localización: <strong>CDMX</strong><br> Sueldo: <strong>$$,$$$$ - $$,$$$ MXN</strong><br> Contrato: <strong>Permanente</strong></p>"
        },
        {
            filterID: "Sales",
            title: "Sales Representative",
            imgPath: "https://fakeimg.pl/300x300/282828/eae0d0/?retina=1&text=image",
            modalTitle: "Sales Representative",
            modalBody: "<p>Lorem ipsum dolor sit amet consectetur adipiscing elit sagittis fames nostra nibh risus, urna lacinia netus platea egestas euismod viverra mattis cum mauris.</p>" +
                "<p>Ullamcorper. Nostra a lectus platea porttitor cursus dignissim eros urna fusce hendrerit dictumst egestas parturient, morbi dapibus iaculis non eget praesent metus. Auctor id aliquet nibh quam. Tempus sollicitudin erat at potentinibh auctor leo primis habitasse dignissim a rutrum.</p>" +
                "<p>Localización: <strong>CDMX</strong><br> Sueldo: <strong>$$,$$$$ - $$,$$$ MXN</strong><br> Contrato: <strong>Permanente</strong></p>"
        },
        {
            filterID: "Management",
            title: "Logistics Manager",
            imgPath: "https://fakeimg.pl/300x300/282828/eae0d0/?retina=1&text=image",
            modalTitle: "Logistics Manager",
            modalBody: "<p>Lorem ipsum dolor sit amet consectetur adipiscing elit sagittis fames nostra nibh risus, urna lacinia netus platea egestas euismod viverra mattis cum mauris.</p>" +
                "<p>Ullamcorper. Nostra a lectus platea porttitor cursus dignissim eros urna fusce hendrerit dictumst egestas parturient, morbi dapibus iaculis non eget praesent metus. Auctor id aliquet nibh quam. Tempus sollicitudin erat at potentinibh auctor leo primis habitasse dignissim a rutrum.</p>" +
                "<p>Localización: <strong>CDMX</strong><br> Sueldo: <strong>$$,$$$$ - $$,$$$ MXN</strong><br> Contrato: <strong>Permanente</strong></p>"
        },
        {
            filterID: "Management",
            title: "Supply Chain Manager",
            imgPath: "https://fakeimg.pl/300x300/282828/eae0d0/?retina=1&text=image",
            modalTitle: "Supply Chain Manager",
            modalBody: "<p>Lorem ipsum dolor sit amet consectetur adipiscing elit sagittis fames nostra nibh risus, urna lacinia netus platea egestas euismod viverra mattis cum mauris.</p>" +
                "<p>Ullamcorper. Nostra a lectus platea porttitor cursus dignissim eros urna fusce hendrerit dictumst egestas parturient, morbi dapibus iaculis non eget praesent metus. Auctor id aliquet nibh quam. Tempus sollicitudin erat at potentinibh auctor leo primis habitasse dignissim a rutrum.</p>" +
                "<p>Localización: <strong>CDMX</strong><br> Sueldo: <strong>$$,$$$$ - $$,$$$ MXN</strong><br> Contrato: <strong>Permanente</strong></p>"
        }
    ];

    constructor() { }

    getApplies() {
        return this.applies;
    }
}

export interface Apply {
    filterID: string;
    title: string;
    imgPath: string;
    modalTitle: string;
    modalBody: string;
};