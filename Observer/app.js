document.addEventListener("DOMContentLoaded", function () {
    'use strict';

    var mcb = d('main/checkbox'),
        btn = d('add/observer'),
        ctn = d('observer/container');

    //Subject is equipped to hold observers 
    extend(mcb, new Subject())

    + function () {
        //when the master is clicked
        mcb.onclick = function () {
            //notify all the child 
            //with its updated value
            mcb.notify(mcb.checked);
        }

        btn.onclick = function () {

            //create new checkbox el
            var ncb = new El('input').addAttrib('type', 'checkbox').el;

            //make new checkbox an observer
            extend(ncb, new Observer());

            //observer call back
            ncb.update = function (value) {
                this.checked = value;
            }

            //adding observers to the subject
            mcb.add(ncb);

            ctn.appendChild(ncb);
        }
    }();
})
