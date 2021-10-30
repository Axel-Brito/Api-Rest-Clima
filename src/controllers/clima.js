import Pool from "./conexion_db";
import zonaLocal from "../datos-act/fecha";


export const getestation= async (req,res) =>{
    try{
        const consulta = await Pool.query("SELECT * FROM estaciones LIMIT 21");

        if(consulta.rowCount !=0){
            res.status(200).json({
                status: "200",
                tipoMIME: "application/json",
                data: consulta.rows,
            });
        }
    } catch(error){
        console.log(error)
        res.status(412).json({
            status: "412 (precondicion fallida)",
            tipoMIME: "application/json",
            fecha: zonaLocal(),
            mensaje: error,
        });
    }
};

export const getestationID= async (req,res) =>{
    const {id} = req.params;
    try{
        const consulta = await Pool.query("SELECT * FROM estaciones WHERE id=$1" , [id]);

        const clima = consulta.rows[0];
        if(clima){
            res.status(200).json({
                status: "200",
                tipoMIME: "application/json",
                clima,
            });
        }
    } catch(error){
        console.log(error)
        res.status(400).json({
            fecha: zonaLocal(),
            mensaje: "error",
            error,
        });
    }
};