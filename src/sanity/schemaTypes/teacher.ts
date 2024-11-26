export const teacher = {
    name: "teacher",
    type: "document",
    title: "Teacher Profile",
    fields: [
        {
            name: "name",
            type: "string",
            title: "Teacher Name",
            validation: (Rule: any) => Rule.required().error('Missing name')
        },
        {
            name: "age",
            type: "number",
            title: "Teacher Age",
            hidden: ({ document }: any) => document.name === "Ameen Alam",  // ratan lal par age remove hojay gi , agar ye teacher me add he to
            readOnly: ({ document }: any) => document.name === "Zia Khan"  , // age add nhi karsakty
            validation: (Rule: any) => Rule.required().max(100).min(18).warning("Above then 100 and smaller then 18 age not allowed")  // age 100 se ziyada nhi honi chahiye
        },
        {
            name: "image",
            type: "image",
            title: "Teacher Image",
        },
        {
            name: "subject",
            type: "reference", // referance subjects 
            title: "Select Subject",
            to: [{ type: "subjects" }],
            hidden: ({ document }: any) => document.age >= 20 // age agr 20 ya 20 se bari he to subject show nhi hongy
        },
        {
            name: "student",
            type: "reference", // referance subjects 
            title: "Select Students",
            to: [{ type: "student" }

            ]
        },
    ]
}