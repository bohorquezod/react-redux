import api from '../api.json'

import { normalize, schema } from 'normalizr'

// media
/* 
const media = new schema.Entity(key, schemaDef, options)
const media = new schema.Entity('media', {}, {
	idAttribute: 'id',
	processStrategy: (value, parent, key) => ({
		...value,
		category: parent.id
	})
})
*/
const media = new schema.Entity('media', {}, {
	idAttribute: 'id',
	processStrategy: (value, parent, key) => ({
		...value,
		category: parent.id
	})
})

// category
const category = new schema.Entity('categories', {
	// playlist: [media]
	playlist: new schema.Array(media)
})

// categories
const categories = {
	// categories: [category]
	categories: new schema.Array(category)
}

const normalizedData = normalize(api, categories)

export default normalizedData