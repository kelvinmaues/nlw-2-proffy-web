import React from "react";
// global components
import PageHeader from "../../components/PageHeader";
import TeacherItem from "../../components/TeacherItem";
// styles
import "./style.css";

const TeacherList = () => {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes sãos os proffys disponíveis.">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject" />
          </div>
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject" />
          </div>
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject" />
          </div>
        </form>
      </PageHeader>
      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </main>
    </div>
  );
};

export default TeacherList;
