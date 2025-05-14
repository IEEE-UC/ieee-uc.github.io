import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

export const hashPassword = async (password: string): Promise<string> => {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
};

export const verifyPassword = async (password: string, hashedPassword: string): Promise<boolean> => {
    return await bcrypt.compare(password, hashedPassword);
};

export const generateToken = (userId: string): string => {
    const secret = process.env.JWT_SECRET || 'your_jwt_secret';
    return jwt.sign({ id: userId }, secret, { expiresIn: '1h' });
};

export const authenticateToken = (token: string) => {
    const secret = process.env.JWT_SECRET || 'your_jwt_secret';
    return jwt.verify(token, secret);
};

export const authenticateUser = async (username: string, password: string) => {
    const user = await prisma.user.findUnique({
        where: { username },
    });

    if (!user) {
        throw new Error('User not found');
    }

    const isPasswordValid = await verifyPassword(password, user.password);
    if (!isPasswordValid) {
        throw new Error('Invalid password');
    }

    return user;
}