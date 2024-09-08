import {TextInputConfig} from "../domain/TextInputConfig";


export class TextInputConstants{
  static emailInputConfig: TextInputConfig = {
    label: 'Email or username',
    type: 'text',
    placeHolder: 'Email or username',
    required: true,
    isForPassword: false
  };

  static passwordInputConfig: TextInputConfig = {
    label: 'Password',
    type: 'password',
    placeHolder: 'Password',
    required: true,
    isForPassword: true
  };

}
