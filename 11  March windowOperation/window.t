Window.open()
It is a pre-defined window method of JavaScript used to open the new tab or window in the browser. This will depend on your browser setting or parameters passed in the window.open() method that either a new window or tab will open.

This method is supported by almost all popular web browsers, like Chrome, Firefox, etc. Following is the syntax and parameters of the window open method -

Syntax
This function accepts four parameters, but they are optional.

window.open(URL, name, specs, replace);  
Or

You can also use this function without using the window keyword as shown below:

open(URL, name, specs, replace)  
There is no difference between both syntaxes.

Parameters List
Below is the parameters list of window.open() method. Note that - all parameters of this method are optional and works differently.

URL: This optional parameter of the window.open() function contains the URL string of a webpage, which you want to open. If you do not specify any URL in this function, it will open a new blank window (about:blank).

name: Using this parameter, you can set the name of the window you are going to open. It supports the following values:

_blank	Passed URL will load into a new tab/window.
_parent	URL will load into the parent window or frame that is already opened.
_self	By passing this parameter, the URL will replace the previous output and a new window will open in the same frame.
_top	URL replaces any frameset that can be loaded.
Name	Provide the name of the new window to show the text or any data on it. (Note - not the title of the window)
The above-specified values are passed inside a single or double quote to the window.open() function at the name parameter place.

specs: This parameter contains the settings that are separated by the comma. Element used in this parameter cannot have whitespaces, e.g., width=150,height=100.

It supports several values.

replace: Like the other parameters of window.open() method, this is also an optional parameter. It either creates a new entry or replaces the current entry in history list. It supports two Boolean values; this means that it returns either true or false:

True	Return true if URL replaces the current entry or document in history list.
False	Return false if URL creates a new entry in history list.
Return Values
It will return a newly opened window.