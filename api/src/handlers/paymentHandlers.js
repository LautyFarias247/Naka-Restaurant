const mercadopago = require("mercadopago");

const payment = async (req, res) =>{
    const {cart, email, id} = req.body
    // Crea un objeto de preferencia
    console.log(email);
    console.log(cart);
    console.log(id);
    let preference = {
        items: [],
        
        back_urls: {
            success: "https://el-bodegon-cliente-local.vercel.app/",
            failure: "https://el-bodegon-cliente-local.vercel.app/",
            pending: "https://el-bodegon-cliente-local.vercel.app/"
        },
        auto_return: "approved",
      };

      cart.forEach(item => {
          preference.items.push(
              {
                  id: item.id,
                  title: item.name,
                  currency_id: "ARS",
                  picture_url: item.image,
                  description: item.description,
                  category_id: "art",
                  quantity: item.quantity,
                  unit_price: item.price
              }
          )
        });
      
      mercadopago.preferences
      .create(preference)
      .then(function(response){
          console.log(response.body.init_point)
          console.log(response.payer)
          res.send({response}/* `<a href="${response.body.init_point}">Ir a pagar</a>` */)
          }).catch(function(error){
            console.log(error);
          });
      }

/*       mercadopago.preferences
        .create(preference)
        .then((response)=>res.status(200).send({response}))
        .catch((error)=>{console.log(error); res.status(404).send(error.message)});
    
    } catch (error) {
        console.log(error);
        res.status(404).send(error.message)
    }
 */

module.exports = {
    payment,
}
