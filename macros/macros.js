const vscode = require('vscode');

/**
 * Macros to work with VSCode Macros extension
 * 
 * Macro configuration settings
 * { [name: string]: {              ... Name of the macro
 *    no: number,                   ... Order of the macro
 *    func: ()=> string | undefined ... Name of the body of the macro function
 *  }
 * }
 */
module.exports.macroCommands = {
   castCoordinatesToDecimal: {
      no: 1,
      func: castCoordinatesToDecimal
   }
};

// source: https://stackoverflow.com/a/1140335
function ConvertDMSToDD(degrees, minutes, seconds, direction) {
   var dd = parseFloat(degrees) + (parseFloat(minutes)/60) + (parseFloat(seconds)/(60*60));

   if (direction == "S" || direction == "W") {
       dd = dd * -1;
   } // Don't do anything for N or E
   return dd;
}

/**
 * cast input text from coord to decimal
 * 
 * @param {*} input text 
 * @returns casted text
 * 
 * old regex: /\d+(\.\d+)?°(\d+(\.\d+)?′)?(\d+(\.\d+)?″)?[NESW]/
 */
function castDMS(input) {
   var parts = input.split(/[^\d\w\.]+/);

   if (input.match(/\d+(\.\d+)?°\d+(\.\d+)?′\d+(\.\d+)?″[NESW]/)) {
      // 38°16′40.2″N
      return ConvertDMSToDD(parts[0], parts[1], parts[2], parts[3]);
   } else if (input.match(/\d+(\.\d+)?°\d+(\.\d+)?′[NESW]/)) {
      // 38.204°N
      return ConvertDMSToDD(parts[0], parts[1], 0, parts[2]);
   } else if (input.match(/\d+(\.\d+)?°[NESW]/)) {
      //	38°16.12N
      return ConvertDMSToDD(parts[0], 0, 0, parts[1]);
   } else {
      // it's something else, just return original input
      vscode.window.showInformationMessage("The castDMS function didn't find a this string to be a coordinate string");
      return input;
   }
}

/**
 * Cast selected text coordinates to decimal
 */
function castCoordinatesToDecimal() {
   const editor = vscode.window.activeTextEditor;
   if (!editor) {
      // Return an error message if necessary.
      return 'Editor is not opening.';
   }
   const document = editor.document;
   const selection = editor.selection;
   const text = document.getText(selection);
   if (text.length > 0) {
      editor.edit(editBuilder => {
         // To surround a selected text in double quotes(Multi selection is not supported).
         editBuilder.replace(selection, castDMS(text));
      });
   }
}