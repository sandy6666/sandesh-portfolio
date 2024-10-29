import * as p from '@clack/prompts';
import { setTimeout } from 'node:timers/promises';
import color from 'picocolors';
import { PrismaClient, Prisma } from '@prisma/client'
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient()

async function main() {
    console.clear();
    await setTimeout(1000);

    p.intro(`${color.bgCyan(color.black(' Create Admin for your website '))}`);

    const project = await p.group(
        {
            name: () =>
                p.text({
                    message: 'name',
                    placeholder: 'admin',
                    validate: (value) => {
                        if (!value) return 'Please enter a name.';
                    },
                }),
            username: () =>
                p.text({
                    message: 'Username',
                    placeholder: 'admin',
                    validate: (value) => {
                        if (!value) return 'Please enter a username.';
                    },
                }),
            email: () =>
                p.text({
                    message: 'Email',
                    placeholder: 'admin',
                    validate: (value) => {
                        if (!value) return 'Please enter a Email.';
                        if(!value.match('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')) return 'Please enter a valid email';
                    },
                }),
            password: () =>
                p.password({
                    message: 'Provide a password',
                    validate: (value) => {
                        if (!value) return 'Please enter a password.';
                        if (value.length < 6) return 'Password should have at least 6 characters.';
                    },
                }),
            create: () =>
                p.confirm({
                    message: 'Create Admin with these data?',
                    initialValue: false,
                }),
        },
        {
            onCancel: () => {
                p.cancel('Operation cancelled.');
                process.exit(0);
            },
        }
    );

    if (project.create) {
        const s = p.spinner();
        s.start('Hang on, Creating a admin');
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = await bcrypt.hashSync(project.password, salt);
        const data = {
            username: project.username,
            email: project.email,
            password: hashedPassword,
            name: project.name,
            role: "USER"
        }
        await prisma.users.create({
            data: data
        })
        s.stop('Done!!');
    }
}

main().catch(console.error);
