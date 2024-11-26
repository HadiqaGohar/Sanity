import { defineType, defineField } from "sanity"
//     schema banengy , field banengy


export const subject = defineType({
    name: "subjects",
    type : "document",
    title : "Subjects",
    fields : [
        defineField ({
            name : "subject",
            type : "string",
            title : "Enter Subjects"
            
        })
    ]
})
