import React from 'react';

export const BASE_URL = `https://strangers-things.herokuapp.com/api/2204-ftb-web-pt/`


export async function getAllPosts() {
    try {
        const response = await fetch(`${BASE_URL}/posts`)
        const data = await response.json();
        
        return data;
    }catch (error){
        throw error;
    }
}