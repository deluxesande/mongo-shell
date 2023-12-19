// Select the database to use.
use("Play");

// db.createCollection("posts");

// db.posts.insertOne({
//     title: "Post 1",
//     body: "The post body",
//     likes: 1,
//     tags: ["news", "sport"],
//     date: Date(),
// });

// db.posts.find()

// db.posts.insertMany([
//     {
//         title: "Post 2",
//         body: "The post body",
//         likes: 1,
//         tags: ["news", "sport"],
//         date: Date(),
//     },
//     {
//         title: "Post 3",
//         body: "The post body",
//         likes: 1,
//         tags: ["news", "sport"],
//         date: Date(),
//     },
//     {
//         title: "Post 4",
//         body: "The post body",
//         likes: 1,
//         tags: ["news", "sport"],
//         date: Date(),
//     },
// ]);

//? Descending order
// db.posts.find().sort({ title: -1 });

// Counting
// db.posts.find({ tags: "news" }).count();

//? limiting
// db.posts.find().limit(3);

// gt
// gte
// lt
// lte
// db.posts.findOne({ likes: { $gt: 0 } });

//? Update
// db.posts.updateMany({ title: "Post 1" }, { $set: { likes: 4 } });

// db.posts.findOne({ title: "Post 1" });

//? Update if Found
//? Insert if not found
// db.posts.updateMany(
//     { title: "Post 6" },
//     { $set: { likes: 4 } },
//     { upsert: true }
// );

//? unset
//? Delete fields
// db.posts.updateMany(
//     {},
//     {
//         $unset: { tags: "" },
//     }
// );

//* Increment
// db.posts.updateMany(
//     {},
//     {
//         $inc: { likes: 1 },
//     }
// );

// db.posts.find();

//! Delete
// db.posts.deleteOne({ title: "Post 6" });
// db.posts.find();

// db.posts.find().projection({
//     title: 1,
// });

//? aggregation
//? Pipelining
// const aggregation = [
//     {
//         $match: {
//             likes: {
//                 $gte: 1,
//             },
//             tags: "news",
//         },
//     },
//     {
//         $project: {
//             title: 1,
//             likes: 1,
//             body: 1,
//         },
//     },
//     {
//         $limit: 2,
//     },
// ];

// db.posts.aggregate(aggregation);

//? Text search
// db.posts.createIndex({ title: "text" });
// db.posts.find({
//     $text: {
//         $search: "4",
//     },
// });

//! Users
// db.users.insertMany([
//     {
//         name: "john",
//         email: "john@gmail.com",
//         number: 12345678,
//     },
//     {
//         name: "jane",
//         email: "jane@gmail.com",
//         number: 12345678,
//     },
//     {
//         name: "joe",
//         email: "joe@gmail.com",
//         number: 12345678,
//     },
// ]);

// db.users.find().pretty();

// ! OneToOne
// db.posts.updateMany(
//     {},
//     {
//         $set: {
//             user: ObjectId("6581a0b391ec292b514e44da"),
//         },
//     }
// );

// db.posts.find();

// db.posts.aggregate({
//     $lookup: {
//         from: "users",
//         localField: "user",
//         foreignField: "_id",
//         as: "user",
//     },
// });

// ! OneToMany
// db.categories.insertMany([
//     {
//         name: "new",
//     },
//     {
//         name: "trend",
//     },
//     {
//         name: "vintage",
//     },
// ]);

// db.posts.updateMany(
//     {},
//     {
//         $set: {
//             category: [
//                 ObjectId("6581a6c74d24becde45368d6"),
//                 ObjectId("6581a6c74d24becde45368d7"),
//                 ObjectId("6581a6c74d24becde45368d8"),
//             ],
//         },
//     }
// );

// db.posts.find();

// db.posts.aggregate({
//     $lookup: {
//         from: "categories",
//         localField: "category",
//         foreignField: "_id",
//         as: "category",
//     },
// });

// db.categories.aggregate([
//     {
//         $project: {
//             name: 1,
//             _id: 0,
//         },
//     },
//     {
//         $limit: 2,
//     },
// ]);

// ! Schema Validation
// db.createCollection("customers", {
//     validator: {
//         $jsonSchema: {
//             bsonType: "object",
//             required: ["name", "email", "address"],
//             properties: {
//                 name: {
//                     bsonType: "string",
//                     description: "Name is required",
//                 },
//                 email: {
//                     bsonType: "string",
//                     description: "Email is required",
//                 },
//                 address: {
//                     bsonType: "object",
//                     description: "Address is required",
//                     properties: {
//                         street: {
//                             bsonType: "string",
//                         },
//                         city: {
//                             bsonType: "string",
//                         },
//                         country: {
//                             bsonType: "string",
//                         },
//                     },
//                 },
//             },
//         },
//     },
// });

// ! Updating schema
// db.runCommand({
//     collMod: "customers",
//     validator: {
//         $jsonSchema: {
//             bsonType: "object",
//             required: ["name", "email", "address"],
//             properties: {
//                 name: {
//                     bsonType: "string",
//                     description: "Name is required",
//                 },
//                 email: {
//                     bsonType: "string",
//                     description: "Email is required",
//                 },
//                 address: {
//                     bsonType: "object",
//                     description: "Address is required",
//                     properties: {
//                         street: {
//                             bsonType: "string",
//                         },
//                         city: {
//                             bsonType: "string",
//                         },
//                         country: {
//                             bsonType: "string",
//                         },
//                     },
//                 },
//             },
//         },
//     },
//     validationLevel: "moderate",
//     validationAction: "error",
// });

db.customers.insertMany(
    [
        {
            name: "sean",
            email: "sean@gmail.com",
            address: {
                street: "nairobi",
                city: "nairobi",
                country: "kenya",
            },
        },
        {
            name: "john",
            email: "john@gmail.com",
            address: {
                street: "nairobi",
                city: "nairobi",
                country: "kenya",
            },
        },
    ],
    { ordered: false }
);

// db.customers.find();
