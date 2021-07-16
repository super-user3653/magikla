# This is a Layout component that you can configure yourself easily that gives a simplistic look

All you have to do is copy the config object and pass it in as shown in example

# Installation

`npm i magikla`

```
import { Magiklayout } from magikla

optionobject={
    header: "true", // leave empty or remove line if you dont want a header
    header_link: "", // put in the link you want the logo to redirect to, put # if you want it to redirect to no where
    img: yourImageDefinedInReact, // required else it will crash
}

return (
    <Magiklayout options={optionobject}>
        Your html code here
    </Magiklayout>
)

```
