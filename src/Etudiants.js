import React, {Component} from 'react';
import {getEtudiants, addEtudiant, updateEtudiant, deleteEtudiant} from "./EtudiantsFunctions";

class Etudiants extends Component{
    constructor(){
        super()
        this.state ={
            id: '',
            nom: '',
            prenom: '',
            tel: '',
            date_of_birth: '',
            adresse: '',
            diplome: '',
            details: '',
            editDisabled: false,
            items: []
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    componentDidMount() {
        this.getAll();
    }

    onChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    getAll = () =>{
        getEtudiants().then(data => {
            this.setState({
                nom: '',
                prenom: '',
                tel: '',
                date_of_birth: '',
                adresse: '',
                diplome: '',
                details: '',
                items: [...data]
            },
                ()=>{
                    console.log(this.state.items)
                })
        })
    }

    onSubmit = e => {
        e.preventDefault()
        addEtudiant(
            this.state.nom,
            this.state.prenom,
            this.state.tel,
            this.state.date_of_birth,
            this.state.adresse,
            this.state.diplome,
            this.state.details,
            ).then(() => {
                this.getAll()
            })
        this.setState({
            nom: '',
            prenom: '',
            tel: '',
            date_of_birth: '',
            adresse: '',
            diplome: '',
            details: '',
        })
    }

    onUpdate = e => {
        e.preventDefault()
        updateEtudiant(
            this.state.id,
            this.state.nom,
            this.state.prenom,
            this.state.tel,
            this.state.date_of_birth,
            this.state.adresse,
            this.state.diplome,
            this.state.details,).then(() => {
                this.getAll()
        })
        this.setState({
            nom: '',
            prenom: '',
            tel: '',
            date_of_birth: '',
            adresse: '',
            diplome: '',
            details: '',
            editDisabled: false,
        })
        this.getAll();
    }

    onEdit = (itemId, e) => {
        e.preventDefault()

        var data = [...this.state.items]
        data.forEach((item, index) =>{
            if(item.id == itemId){
                this.setState({
                    id: item.id,
                    nom: item.nom,
                    prenom: item.prenom,
                    tel: item.tel,
                    date_of_birth: item.date_of_birth,
                    adresse: item.adresse,
                    diplome: item.diplome,
                    details: item.details,
                    editDisabled: true,
                })
            }
        })
    }

    onDelete = (val, e) => {
        e.preventDefault()
        deleteEtudiant(val)
        this.getAll()
    }

    render(){
        return(
            <div className="col-md-12">
                <div className="row mb-3">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header bg-primary text-white">
                                <h5 >Nouvel Etudiant</h5>
                            </div>
                            <div className="card-body">
                                <form onSubmit={this.onSubmit}>
                                    <div className="form-group">
                                        <div className="form-row">
                                            <div className="col-md-6">
                                                <label htmlFor="nom">Nom</label>
                                                <input type="text" className="form-control form-control-sm" placeholder="Nom de l'étudiant"
                                                       id="nom" name="nom" value={this.state.nom || '' } onChange={this.onChange.bind(this)} />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="prenom">Prénom</label>
                                                <input type="text" className="form-control form-control-sm" placeholder="prénom de l'étudiant"
                                                       id="prenom" name="prenom" value={this.state.prenom || '' } onChange={this.onChange.bind(this)} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="form-row">
                                            <div className="col-md-6">
                                                <label htmlFor="tel">Téléphone</label>
                                                <input type="text" className="form-control form-control-sm" placeholder="237690102547"
                                                       id="tel" name="tel" value={this.state.tel || '' } onChange={this.onChange.bind(this)} />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="date">Date de Naissance</label>
                                                <input type="date" className="form-control form-control-sm" placeholder=""
                                                       id="date" name="date_of_birth" value={this.state.date_of_birth || '' } onChange={this.onChange.bind(this)} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="form-row">
                                            <div className="col-md-6">
                                                <label htmlFor="adresse">Adresse</label>
                                                <input type="text" className="form-control form-control-sm" placeholder="Bonamoussadi"
                                                       id="adresse" name="adresse" value={this.state.adresse || '' } onChange={this.onChange.bind(this)} />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="diplome">Diplôme</label>
                                                <input type="text" className="form-control form-control-sm" placeholder="Baccalauréat D"
                                                       id="diplome" name="diplome" value={this.state.diplome || '' } onChange={this.onChange.bind(this)} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="form-row">
                                            <div className="col-md-12">
                                                <label htmlFor="details">Adresse</label>
                                                <textarea name="details" id="details" cols="30" rows="5" className="form-control form-control-sm"
                                                          placeholder="Observations personnelle..." value={this.state.details || '' } onChange={this.onChange.bind(this)}>
                                        </textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <button type="submit"
                                                onClick={!this.state.editDisabled ? this.onSubmit.bind(this): this.onUpdate.bind(this)}
                                                className="btn btn-sm btn-primary">
                                            {!this.state.editDisabled ? 'Enregistrer': 'Modifier'}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-12">
                        <div className="card">
                    <div className="card-header bg-primary text-white">
                        <h5>Liste des Etudiants</h5>
                    </div>
                    <div className="card-body">
                        <table className="table table-sm table-hover">
                            <thead>
                            <th>N°</th>
                            <th>Nom</th>
                            <th>Prénom</th>
                            <th>Diplôme</th>
                            <th colSpan="2" className="text-center">Actions</th>
                            </thead>
                            <tbody>
                            {this.state.items.map((item, index) => (
                                <tr key = {index}>
                                    <td>{item.id}</td>
                                    <td>{item.nom}</td>
                                    <td>{item.prenom}</td>
                                    <td>{item.diplome}</td>
                                    <td>
                                        <button href="" className="btn btn-sm btn-info" disabled={this.state.editDisabled}
                                        onClick={this.onEdit.bind(
                                            this, item.id
                                        )}>Editer</button>
                                    </td>
                                    <td>
                                        <button href="" className="btn btn-sm btn-danger" disabled={this.state.editDisabled}
                                        onClick={this.onDelete.bind(
                                            this, item.id
                                        )}>Supprimer</button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Etudiants