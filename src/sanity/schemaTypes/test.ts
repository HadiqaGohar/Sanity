import { title } from "process";


export const test = {
    name: "test",
    type: "document",
    title: "Test Profile",
    fields: [
        {
            name: "name",
            type: "string",
            title: "Test Name",
            // validation: (Rule: any) => Rule.required().error('Missing name')
        },
        {
            name : "image",
            type : "image",
            title : "Profile Image"
        }
    ]
}