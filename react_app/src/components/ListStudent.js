import React, { Component } from "react";
import { Table } from "reactstrap";
import NewStudentModal from "./Modal";
import ConfirmRemovalModal from "./RemovalModal";

class StudentList extends Component {
    render() {
        const students = this.props.students;
        return (
            <Table dark>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>RA</th>
                        <th>Telefone</th>
                        <th>Data de Criação</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {!students || students.length <= 0 ? (
                        <tr>
                            <td colSpan="6" align="center">
                                <b>Ops, não há nenhum aluno cadastrado</b>
                            </td>
                        </tr>
                    ) : (
                            students.map(student => (
                                <tr key={student.id}>
                                    <td>{student.name}</td>
                                    <td>{student.email}</td>
                                    <td>{student.document}</td>
                                    <td>{student.phone}</td>
                                    <td>{student.registrationDate}</td>
                                    <td align="center">
                                        <NewStudentModal
                                            create={false}
                                            student={student}
                                            resetState={this.props.resetState}
                                        />
                                        &nbsp;&nbsp;
                                        <ConfirmRemovalModal
                                            pk={student.id}
                                            resetState={this.props.resetState}
                                        />
                                    </td>
                                </tr>
                            ))
                        )}
                </tbody>
            </Table>
        );
    }
}

export default StudentList;