import User, { IUser } from '../models/userModel';
import { AIConfigurationSystemMessage } from '../const/AIConfigurationSystemMessage';

interface Params extends MessageOpenAI {
    cellphone: Cellphone
}

export const createMessage = async ({ cellphone, role, content }: Params) => {
    try {
        // Busca al usuario por el número de teléfono
        let user: IUser | null = await User.findOne({ cellphone });

        // Si el usuario no existe, lo creamos en la bd y le ponoemos el mensaje de configuración
        if (!user) {
            user = new User({ cellphone, messages: [AIConfigurationSystemMessage] });
            await user.save();
        }

        // Agregamos el mensaje al array de mensajes del usuario
        user.messages.push({ role, content });
        await user.save();

        return user
    } catch (error) {
        console.error(error);
        return { message: 'Error al crear el mensaje', error };
    }
};
