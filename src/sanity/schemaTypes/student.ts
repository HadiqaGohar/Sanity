import { title } from "process";

export const student = {
    name: "student",
    type: "document",
    title: "Student Profile",
    fields: [
        {
            name: "name",
            type: "string",
            title: "Student Name",
        },
        {
            name: "age",
            type: "number",
            title: "Student Age",
        },
        {
            name: "gender",
            type: "string",
            title: "Gender",
            options: {
                list: [
                    { title: "Male", value: "male" },
                    { title: "Female", value: "female" },
                    { title: "Transgender", value: "transgender" }
                ],
                layout: "dropdown"
            }
        },
        {
            name: "image",
            type: "image",
            title: "Student Image",
        },
        {
            name: "Hobby",
            type: "array",
            title: "Hobby",
            of: [{ type: 'string' }]
        },
        {
            title: 'Tags',
            name: 'tags',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                layout: 'tags'
            }
        },
        {
            title: 'Date of Birth',
            name: 'releaseDate',
            type: 'date'
        },
        {
            name : "bform",
            type : "file",
            title : "Upload B-Form"
        },
        {
            title: 'Address',
            name: 'address',
            type: 'object',
            fields: [
              {name: 'street', type: 'string', title: 'Street name'},
              {name: 'streetNo', type: 'string', title: 'Street number'},
              {name: 'city', type: 'string', title: 'City'}
            ]
          },
          {
            name : "imageUrl",
            type : "url",
            title : "Social Media Link"
          },
          {
            title: 'Choose Subject',
            name: 'subject',
            type: 'array',
            of: [{type: 'string'}],
            options: {
              list: [
                {title: 'HTML', value: 'html'},
                {title: 'CSS', value: 'css'},
                {title: 'Typescript', value: 'ts'},
                {title: 'Javascript', value: 'js'},
                {title: 'NextJS', value: 'nextjs'},
                {title: 'Tailwind CSS', value: 'tailwind'},
                {title: 'Python', value: 'python'},
                {title: 'ReactJS', value: 'react'}
              ]
            }
          }
    ],
}