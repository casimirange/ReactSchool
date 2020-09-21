import axios from 'axios';

export const getEtudiants = () =>{
    return axios.get(`/api/etudiants/`, {
        headers: {'Content-Type': 'application/json'}
    }).then(res => {
        return res.data;
    })
}

export const getEtudiant = id => {
    return axios.get(`/api/etudiant/${id}`, {
        headers: {'Content-Type': 'application/json'}
    }).then(res => {
        return res.data;
    })
}

export const addEtudiant = (nom, prenom, tel, date_of_birth, adresse, diplome, details) => {
    return axios.post('/api/etudiant', {
        nom: nom,
        prenom: prenom,
        tel: tel,
        date_of_birth: date_of_birth,
        adresse: adresse,
        diplome: diplome,
        details: details,
    }, {
        headers: {'Content-Type': 'application/json'}
    }).then(res => {
        console.log(res);
    })
}

export const deleteEtudiant = id => {
    axios.delete(`/api/etudiant/${id}`, {
        headers: {'Content-Type': 'application/json'}
    }).then(res => {
        console.log(res);
    }).catch(err => {
        console.log(err);
    })
}

export const updateEtudiant = (nom, prenom, tel, date_of_birth, adresse, diplome, details, id) => {
    return axios.put(`/api/etudiant/${id}`, {
        nom: nom,
        prenom: prenom,
        tel: tel,
        date_of_birth: date_of_birth,
        adresse: adresse,
        diplome: diplome,
        details: details,
    }, {
        headers: {'Content-Type': 'application/json'}
    }).then(res => {
        console.log(res);
    }).catch(err => {
        console.log(err);
    })
}