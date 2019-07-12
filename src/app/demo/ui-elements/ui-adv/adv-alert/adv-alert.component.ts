import { Component, OnInit } from '@angular/core';
import 'sweetalert2/src/sweetalert2.scss';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-adv-alert',
  templateUrl: './adv-alert.component.html',
  styleUrls: ['./adv-alert.component.scss']
})
export class AdvAlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  basicSwal() {
    Swal('', 'Hello world!');
  }

  successSwal() {
    Swal('Good job!', 'You clicked the button!', 'success');
  }

  warningSwal() {
    Swal('Good job!', 'You clicked the button!', 'warning');
  }

  dangerSwal() {
    Swal('Good job!', 'You clicked the button!', 'error');
  }

  infoSwal() {
    Swal('Good job!', 'You clicked the button!', 'info');
  }

  confirmAlert() {
    Swal({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this imaginary file!',
      type: 'warning',
      showCloseButton: true,
      showCancelButton: true
    }).then((willDelete) => {
        if (willDelete) {
          Swal('', 'Poof! Your imaginary file has been deleted!', 'success');
        } else {
          Swal('', 'Your imaginary file is safe!', 'error');
        }
      });
  }

  promptAlert() {
    Swal({
      text: 'Write something here:',
      input: 'text',
    }).then((result) => {
      if (result.value) {
        Swal('', `You typed: ${result.value}`);
      }
    });
  }

  ajaxAlert() {
    Swal({
      text: 'Submit your Github username',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Look up',
      showLoaderOnConfirm: true,
      preConfirm: (login) => {
        return fetch(`//api.github.com/users/${login}`)
          .then(response => {
            if (!response.ok) {
              throw new Error(response.statusText);
            }
            return response.json();
          })
          .catch(error => {
            Swal.showValidationMessage(
              `Request failed: ${error}`
            );
          });
      },
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
      if (result.value) {
        Swal({
          title: `${result.value.login}'s avatar`,
          imageUrl: result.value.avatar_url
        });
      }
    });
  }
}
