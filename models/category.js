const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema(
    {
        title: {
            type: Schema.Types.String,
            required: true
        },
        categorylinks: {
            link1: {
                name: {
                    type: Schema.Types.String,
                    required: true
                },
                url: {
                    type: Schema.Types.String,
                    required: true
                },
                imgsrc: {
                    type: Schema.Types.String
                }
            },
            link2: {
                name: {
                    type: Schema.Types.String,
                    required: true
                },
                url: {
                    type: Schema.Types.String,
                    required: true
                },
                imgsrc: {
                    type: Schema.Types.String,
                }
            },
            link3: {
                name: {
                    type: Schema.Types.String,
                    required: true
                },
                url: {
                    type: Schema.Types.String,
                    required: true
                },
                imgsrc: {
                    type: Schema.Types.String,
                }
            },
            link4: {
                name: {
                    type: Schema.Types.String,
                    required: true
                },
                url: {
                    type: Schema.Types.String,
                    required: true
                },
                imgsrc: {
                    type: Schema.Types.String,
                }
            },
            link5: {
                name: {
                    type: Schema.Types.String,
                    required: true
                },
                url: {
                    type: Schema.Types.String,
                    required: true
                },
                imgsrc: {
                    type: Schema.Types.String
                }
            }
        }
    }
)


module.exports = Category = mongoose.model('category', CategorySchema);