/* eslint-disable */
import React, { ReactNode } from 'react';
import styles from './Table.module.css';

type specialObject = {
  property: string;
  showValue: boolean;
};
type additionalRecordProps = {
  [key: string]: string;
};
//defino las prop de la tabla
type TableProps = {
  headers: Record<string, ReactNode>; //cabeceras de la tabla
  rows: Record<string, ReactNode>[];
  id: specialObject;
  highlight: specialObject; //fila o columna debe resaltarse en la tabla.
  hideHeaders?: boolean; //indica si se deben ocultar o no las cabeceras de la tabla.
};
//fn para resaltar el color en la tabla seleccionada checkbox
const getClassNameRow = (
  row: Record<string, ReactNode>,
  highlight: specialObject
) => {
  const highlightValue = row[highlight.property];
  if (typeof highlightValue != 'boolean') {
    throw Error('Boolean type for highlight value is required');
  }
  return highlightValue ? `${styles.Row} ${styles.Highlight}` : styles.Row;
};
const getIdRow = (row: Record<string, ReactNode>, id: specialObject) => {
  const idValue = row[id.property];
  if (typeof idValue != 'string' && typeof idValue != 'number') {
    throw Error('String or Number type for id value is required');
  }
  return idValue;
};
//headers : ['Checkbox', 'Name', 'Rut', 'Permisos', 'Oval', 'Acciones']
//rows    : 1: {id: 2, Checkbox: {…}, Acciones: {…}, selected: false, Name: {…}, …}
//id        : {property: 'id', showValue: false}
//highlight  :  {property: 'selected', showValue: false}
//hideHeaders:  false(esconder cabecera en diferentes tamanos de pantalla)
const Table = ({ headers, rows, id, highlight, hideHeaders }: TableProps) => {
 
  //{console.log(Object.keys(id))}  
  return (
    <table className={styles.Table}>
      {!hideHeaders && (
        <thead className={styles.Header}>
          <tr className={styles.Row}>
            {Object.keys(headers).map((key) => {
              if (id.property === key && !id.showValue) return null;//?????
              if (highlight.property === key && !highlight.showValue)//????
                return null;
              return <th key={key}>{headers[key]}</th>;//retorna cabecera de tabla
            })}
          </tr>
        </thead>
      )}
    {  /*Recorre cada objeto del arreglo rows con la función map y devuelve un elemento tr por cada uno. */}
      <tbody className={styles.Tbody}>
        {rows.map((row) => (
          
          <tr
          
            key={getIdRow(row, id)}
            className={getClassNameRow(row, highlight)}
          >
            {Object.keys(headers).map((key) => {
              //{console.log(key)}
              if (id.property === key && !id.showValue) return null;
              if (highlight.property === key && !highlight.showValue)
                return null;
              return <td key={`${row[id.property]}_${key}`}>{row[key]}</td>;
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
